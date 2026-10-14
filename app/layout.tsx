import type { Metadata, Viewport } from 'next';
import { JetBrains_Mono, Montserrat, Source_Serif_4 } from 'next/font/google';
import { site } from '@/lib/content';
import './globals.css';

const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800', '900'],
  variable: '--font-montserrat',
  display: 'swap',
});
const serif = Source_Serif_4({
  subsets: ['latin'],
  weight: ['400', '600'],
  style: ['normal', 'italic'],
  variable: '--font-serif',
  display: 'swap',
});
const mono = JetBrains_Mono({ subsets: ['latin'], weight: ['400'], variable: '--font-mono', display: 'swap' });

export const metadata: Metadata = {
  title: `${site.name} — ${site.tagline}`,
  description: `Faith-rooted writing programmes that take you from a calling to a finished, published book. Next cohort begins ${site.nextCohort}.`,
  openGraph: {
    type: 'website',
    siteName: site.name,
    title: `${site.name} — ${site.tagline}`,
    description: 'Every great book begins as a calling. We help you answer it with craft, discipline and a finished manuscript.',
    locale: 'en_GB',
  },
};

export const viewport: Viewport = { themeColor: '#0A0A0A' };

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en-GB" className={`${montserrat.variable} ${serif.variable} ${mono.variable}`}>
      <body>{children}</body>
    </html>
  );
}
