import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'AI Income Navigator',
  description: 'Precision roadmap to reach $2,000/month using only free AI tools.'
};

type RootLayoutProps = {
  children: React.ReactNode;
};

const RootLayout = ({ children }: RootLayoutProps) => (
  <html lang="en">
    <body className="antialiased">{children}</body>
  </html>
);

export default RootLayout;
