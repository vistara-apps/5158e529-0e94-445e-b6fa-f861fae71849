import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { Providers } from './providers';
import { ThemeProvider } from './components/ThemeProvider';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'GmChat - AI-Powered Welcome Bot',
  description: 'Your AI-powered welcome bot to onboard any user, instantly.',
  keywords: ['AI', 'chatbot', 'onboarding', 'Farcaster', 'Base', 'Web3'],
  authors: [{ name: 'GmChat Team' }],
  openGraph: {
    title: 'GmChat - AI-Powered Welcome Bot',
    description: 'Your AI-powered welcome bot to onboard any user, instantly.',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'GmChat - AI-Powered Welcome Bot',
    description: 'Your AI-powered welcome bot to onboard any user, instantly.',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider>
          <Providers>
            <div className="min-h-screen bg-bg text-fg">
              {children}
            </div>
          </Providers>
        </ThemeProvider>
      </body>
    </html>
  );
}
