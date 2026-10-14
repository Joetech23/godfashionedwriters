export const site = {
  name: "God-Fashioned Writers' Academy",
  tagline: 'Training Authors, Not Just Writers',
  email: 'hello@example.com',
  instagram: '#',
  nextCohort: '3 November',
};

export const nav = [
  { label: 'Programmes', href: '#programmes' },
  { label: 'How it works', href: '#how' },
  { label: 'Author stories', href: '#stories' },
  { label: 'About', href: '#' },
];

export type Pillar = { title: string; body: string; accent: 'ink' | 'purple' | 'gold' };

export const pillars: Pillar[] = [
  { title: 'Called', body: 'Faith-rooted and purposeful. We treat your writing as stewardship of a gift.', accent: 'ink' },
  { title: 'Crafted', body: 'Structure, voice, editing — practical skills taught by published mentors.', accent: 'purple' },
  { title: 'Finished', body: 'Accountability to the last page, and a clear route to publication.', accent: 'gold' },
];

export const programmes = [
  {
    length: '12-week course',
    level: 'Core',
    title: "The Author's Path",
    body: 'Draft, edit and prepare your manuscript for publication with mentor feedback every week.',
    start: 'Starts 3 Nov',
  },
  {
    length: '6-week course',
    level: 'Beginner',
    title: 'Foundations of Craft',
    body: 'Voice, structure and the daily writing habit — for those starting their first book.',
    start: 'Starts 17 Nov',
  },
  {
    length: '1:1 mentorship',
    level: 'Advanced',
    title: 'Manuscript to Market',
    body: 'Personal editorial guidance, proposal writing and a publishing roadmap for your finished draft.',
    start: 'Rolling intake',
  },
];

export const steps = [
  { title: 'Enrol', body: 'Choose your programme and join a cohort of committed writers.' },
  { title: 'Write', body: 'Weekly lessons and deadlines that move your manuscript forward.' },
  { title: 'Refine', body: 'Line-by-line feedback from published mentors and peers.' },
  { title: 'Publish', body: 'Prepare, launch and step into your calling as an author.' },
];

export const story = {
  quote: 'I came with an idea and a folder of half-finished chapters. I left with a book in my hands.',
  name: 'Graduate name',
  book: 'Book Title',
  cohort: 'Cohort 2025',
};
