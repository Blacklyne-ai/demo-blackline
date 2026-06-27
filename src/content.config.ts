import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

// Blackline Motor Company — inventory snapshot of the real WordPress/JetEngine
// catalogue (100 vehicles, one JSON per car). Every field is scraped verbatim from
// blacklinemotorcompany.com (REST + rendered detail pages): make/model, year,
// price (AED), monthly installment (AED), kilometers, body type, regional specs,
// transmission, fuel, cylinders, engine, colours, the full spec description and
// the real photo gallery. Nothing invented. Production: couple to the WP feed
// (see JUDGEMENT_CALLS.md).
const cars = defineCollection({
  loader: glob({ pattern: '**/*.json', base: './src/content/cars' }),
  schema: z.object({
    id: z.string(),
    slug: z.string(),
    make: z.string(),
    model: z.string(),
    year: z.number(),
    priceAED: z.number(),                 // total asking price, AED (real)
    monthlyAED: z.number().default(0),    // "or from AED x / month" (real, 0 = not published)
    kilometers: z.number().default(0),
    bodyType: z.string().default(''),
    specs: z.string().default(''),        // GCC / European / Japanese / Imported
    transmission: z.string().default(''),
    fuel: z.string().default(''),
    cylinders: z.number().nullable().default(null),
    engine: z.string().default(''),
    exteriorColor: z.string().default(''),
    interiorColor: z.string().default(''),
    description: z.string().default(''),
    images: z.array(z.string()).default([]),
    sourceUrl: z.string().optional(),
  }),
});

export const collections = { cars };
