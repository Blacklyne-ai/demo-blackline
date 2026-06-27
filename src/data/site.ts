// ──────────────────────────────────────────────────────────────
// Blackline Motor Company — central master data. Every string here is
// verbatim from blacklinemotorcompany.com (scraped). The 100-car inventory
// lives in the content collection (src/content/cars). NOTHING invented.
// Contact numbers per the operator brief. See JUDGEMENT_CALLS.md.
// ──────────────────────────────────────────────────────────────

export const site = {
  name: 'Blackline Motor Company',
  shortName: 'Blackline',
  legalName: 'Blackline Motor Company', // Trade-licence firmierung — Operator-TODO
  domain: 'blacklinemotorcompany.com',
  city: 'Dubai',
  country: 'United Arab Emirates',
  welcome: 'WELCOME TO BLACKLINE MOTOR COMPANY',
  tagline: 'Driven by passion, defined by Blackline.',
  description:
    'Premium pre-owned car dealer in Dubai. Buy, sell or consign high-spec luxury and performance vehicles — top prices, no fees, instant payment.',
};

export const contact = {
  phonePrimary: '04 321 8409',
  phonePrimaryHref: 'tel:+97143218409',
  phoneSecondary: '050 408 1740',
  phoneSecondaryHref: 'tel:+971504081740',
  whatsapp: 'https://wa.me/971542122197',
  whatsappNumber: '+971 54 212 2197',
  whatsappHref: 'tel:+971542122197',
  email: 'info@blacklinemotorcompany.com',
  emailHref: 'mailto:info@blacklinemotorcompany.com',
  instagram: 'https://www.instagram.com/blacklinemotorcompany',
  facebook: 'https://www.facebook.com/BlacklineMotorCompany',
  address: 'Showroom 54, Block 6, New Car Market, Ras Al Khor 3, Dubai, UAE',
  addressLine1: 'Showroom 54, Block 6, New Car Market',
  addressLine2: 'Ras Al Khor 3, Dubai · United Arab Emirates',
  mapQuery: 'Blackline Motor Company, Dubai',
  mapEmbed:
    'https://maps.google.com/maps?q=Blackline%20Motor%20Company%2C%20Ras%20Al%20Khor%2C%20Dubai&t=m&z=15&output=embed&iwloc=near',
  reviewLink: 'https://g.page/r/CRX-W0607VMaEAE',
  reviewCount: 466, // "Based on 466 reviews" (verbatim) — Operator-TODO: wire live Place rating
  hoursNote: 'Open 7 days · 10 AM – 8 PM',
  hours: [
    ['Sunday', '10 AM – 8:00 PM'],
    ['Monday', '10 AM – 8:00 PM'],
    ['Tuesday', '10 AM – 8:00 PM'],
    ['Wednesday', '10 AM – 8:00 PM'],
    ['Thursday', '10 AM – 8:00 PM'],
    ['Friday', '10 AM – 8:00 PM'],
    ['Saturday', '10 AM – 8:00 PM'],
  ] as [string, string][],
};

export type NavItem = { label: string; href: string };
export const nav: NavItem[] = [
  { label: 'Buy', href: '/our-cars' },
  { label: 'Sell', href: '/sell-your-car' },
  { label: 'Consignment', href: '/consignment' },
  { label: 'Previously Sold', href: '/previously-sold' },
  { label: 'Blog', href: '/blog' },
  { label: 'About', href: '/about-us' },
  { label: 'Contact', href: '/contact-us' },
];

// ── "Why choose us" — the 4 points, verbatim from /sell-your-car ──
export const whyChooseUs: { icon: string; text: string }[] = [
  { icon: 'BadgeCheck', text: 'Top Prices for High-Spec Vehicles' },
  { icon: 'HandCoins', text: 'Free no obligation price' },
  { icon: 'Banknote', text: 'Instant Payment, No Fees' },
  { icon: 'ListChecks', text: 'Sell your car in 4 easy steps' },
];

// ── "Services We Offer" — verbatim from the homepage ──
export type Service = { title: string; icon: string; body: string };
export const services: Service[] = [
  {
    title: 'Buying your new car',
    icon: 'Car',
    body: 'We take great pride in the cars that we supply to our customers and treat each like they are our own. With a great range of choice, we are confident we can help you find the perfect option, if not we will be more than happy to help you look for the exact car you require.',
  },
  {
    title: 'Selling your old car',
    icon: 'Tag',
    body: 'We are always looking for new cars for our customers, if you have a car to sell, please get in touch with us and our team of professionals will carry out an appraisal for you. With onsite RTA facilities we can make the process as seamless as possible.',
  },
  {
    title: 'Vehicle Consignment',
    icon: 'Handshake',
    body: 'If you are looking to sell your car but don’t want the hassle of a private sale and would prefer a remote, hassle free sale, handled by experts then a consignment sale could be the best option for you.',
  },
  {
    title: 'Part Exchange',
    icon: 'Repeat',
    body: 'If you have an old car that you wish to upgrade or replace, we would be happy to assist you with a part exchange towards a new car.',
  },
  {
    title: 'Finance & Insurance',
    icon: 'Landmark',
    body: 'We work with all the leading UAE banks to provide a full range of solutions for our customers. With flexible terms and downpayments we can tailor packages to suit every customer. We also work with the major UAE insurance companies, so rest assured we will make sure that you have the right cover for your new purchase.',
  },
];

// ── Sell-form make dropdown — verbatim list, in source order ──
export const makeOptions: string[] = [
  'Abarth', 'Alfa Romeo', 'Alpine', 'Ariel', 'Aston Martin', 'Audi', 'Bentley',
  'BMW', 'Bugatti', 'Cadillac', 'Chevrolet', 'Dodge', 'Ferrari', 'Fisker', 'Ford',
  'GMC', 'Honda', 'Jaguar', 'Jeep', 'Koenigsegg', 'Lamborghini', 'Land Rover',
  'Lexus', 'Lincoln', 'Lotus', 'Maserati', 'Maybach', 'McLaren', 'Mini', 'Nissan',
  'Pagani', 'Porsche', 'Ram', 'Toyota', 'Volkswagen', 'Volvo', 'Jetour', 'BYD',
];

export const yearOptions: number[] = [2026, 2025, 2024, 2023, 2022, 2021, 2020, 2019, 2018, 2017, 2016];

export const kmOptions: string[] = [
  '0-10,000 KM', '10,000-20,000 KM', '20,000-30,000 KM', '30,000-40,000 KM',
  '40,000-50,000 KM', '50,000-60,000 KM', '60,000-70,000 KM', '70,000-80,000 KM',
  '80,000-90,000 KM', '90,000-100,000 KM',
];

export const specsOptions: string[] = ['GCC', 'European', 'Japanese'];

// ── "Brands we buy" — 12 brands, each with its own /sell-my-[brand] landing page.
// `make` matches a makeOptions value so the sell wizard can pre-select it. ──
export type BuyBrand = { name: string; slug: string; make: string };
export const buyBrands: BuyBrand[] = [
  { name: 'Audi', slug: 'sell-my-audi', make: 'Audi' },
  { name: 'Bentley', slug: 'sell-my-bentley', make: 'Bentley' },
  { name: 'BMW', slug: 'sell-my-bmw', make: 'BMW' },
  { name: 'Ferrari', slug: 'sell-my-ferrari', make: 'Ferrari' },
  { name: 'Ford', slug: 'sell-my-ford', make: 'Ford' },
  { name: 'Lamborghini', slug: 'sell-my-lamborghini', make: 'Lamborghini' },
  { name: 'Land Rover Defender', slug: 'sell-my-land-rover-defender', make: 'Land Rover' },
  { name: 'Land Rover Range Rover', slug: 'sell-my-land-rover-range-rover', make: 'Land Rover' },
  { name: 'Mercedes', slug: 'sell-my-mercedes', make: 'Mercedes-Benz' },
  { name: 'Mini', slug: 'sell-my-mini', make: 'Mini' },
  { name: 'Porsche', slug: 'sell-my-porsche', make: 'Porsche' },
  { name: 'Volkswagen', slug: 'sell-my-volkswagen', make: 'Volkswagen' },
];

// ── About — verbatim from /about-us ──
export const about = {
  intro:
    'The team at Blackline Motor Company have each shared the success of working with the largest used car retailer in Europe where we were part of that initial development and growth, and each of us is proud of our contributions & achievements. With the combined experience of over 50 years in the European market, we know that our team is the very best in the industry, and there is no team in Dubai that is better equipped to deliver quality products or quality of service at the levels of Blackline Motor Company.',
  difference:
    'We are not interested in acquiring ‘cheap’ cars, we will only select the very best cars for our customers. We will then carry out the best inspection, producing a fully detailed report on every aspect of the car. Our customers will never set eyes on a car that doesn’t pass this stringent stage of acquisition. Once this stage is completed, the car will then be returned to its full glory with professional detailing that leads industry standards. Then, and only then will our customers be able to view this car. At this stage, we have surpassed the levels and standards of our competitors and the car has not even been advertised yet. Our customers are then invited to visit our boutique showroom for hassle free assistance, guidance & support.',
  closing:
    'Our pricing position will always be competitive, whilst supplying standards of excellence. Blackline will never sell you a car, we will only help you to buy one. We assist our customers with each funding option to purchase their new car and will guide them through the entire purchasing journey, from Insurance & Registration to Comprehensive Warranty & Service Contract packages that mirror the level of protection given by the manufacturer. Our customers will then enjoy full peace of mind & ownership of a car supplied by Blackline Motor Company.',
};
