import { getCollection, type CollectionEntry } from 'astro:content';

export type Car = CollectionEntry<'cars'>['data'];

export const fmtAED = (n: number) =>
  'AED ' + new Intl.NumberFormat('en-US', { maximumFractionDigits: 0 }).format(n);

export const fmtKm = (n: number) =>
  new Intl.NumberFormat('en-US', { maximumFractionDigits: 0 }).format(n) + ' km';

// Display name on a card / heading: "2025 Rolls-Royce Cullinan"
export const carTitle = (c: Car) => `${c.year} ${c.make} ${c.model}`.replace(/\s+/g, ' ').trim();
// Without year, for tighter contexts
export const carName = (c: Car) => `${c.make} ${c.model}`.replace(/\s+/g, ' ').trim();

// Whole inventory, sorted by price (desc — flagship first).
export async function getCars(): Promise<Car[]> {
  const entries = await getCollection('cars');
  return entries.map((e) => e.data).sort((a, b) => b.priceAED - a.priceAED);
}

// Counts per make — for filter chips / brand strips.
export function makeCounts(cars: Car[]) {
  const m = new Map<string, number>();
  for (const c of cars) m.set(c.make, (m.get(c.make) || 0) + 1);
  return m;
}

// Makes present, ordered by count desc.
export function activeMakes(cars: Car[]): string[] {
  return [...makeCounts(cars).entries()].sort((a, b) => b[1] - a[1]).map(([m]) => m);
}

// Distinct body types present, ordered by count desc.
export function bodyTypes(cars: Car[]): string[] {
  const m = new Map<string, number>();
  for (const c of cars) if (c.bodyType) m.set(c.bodyType, (m.get(c.bodyType) || 0) + 1);
  return [...m.entries()].sort((a, b) => b[1] - a[1]).map(([b]) => b);
}

// "Similar" cars for a detail page: same make / body type favoured, price-close.
export function similar(cars: Car[], car: Car, n = 3): Car[] {
  return cars
    .filter((c) => c.id !== car.id)
    .map((c) => {
      let score = 0;
      if (c.make === car.make) score += 3;
      if (c.bodyType && c.bodyType === car.bodyType) score += 2;
      const priceClose = 1 - Math.min(1, Math.abs(c.priceAED - car.priceAED) / Math.max(car.priceAED, 1));
      score += priceClose;
      return { c, score };
    })
    .sort((a, b) => b.score - a.score)
    .slice(0, n)
    .map((x) => x.c);
}

// Split the scraped description into readable lines (the source uses inline " - " bullets).
export function descLines(desc: string): { lead: string; bullets: string[] } {
  if (!desc) return { lead: '', bullets: [] };
  const parts = desc.split('\n').map((s) => s.trim()).filter(Boolean);
  const out: string[] = [];
  for (const p of parts) {
    // a line may pack several " - " bullets together
    if (/\s-\s/.test(p) && p.split(' - ').length > 2) {
      p.split(/\s-\s/).map((s) => s.trim()).filter(Boolean).forEach((s) => out.push(s));
    } else {
      out.push(p.replace(/^-\s*/, ''));
    }
  }
  const lead = out.shift() || '';
  return { lead, bullets: out.filter((b) => b.length > 1) };
}
