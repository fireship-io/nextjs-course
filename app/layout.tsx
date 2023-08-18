import AuthProvider from '@/components/AuthProvider';
import NavMenu from '@/components/NavMenu';
import { Overpass } from 'next/font/google';
import './globals.css';

const myFont = Overpass({ subsets: ['latin'] });

export const metadata = {
  title: 'globle',
  description: 'The geography learning aid built on Google Maps',
};

interface Props {
  children: React.ReactNode;
}

export default function RootLayout({ children }: Props) {
  return (
    <AuthProvider>
      <html lang="en">
        <body className={myFont.className}>
          <div className="container">
            <NavMenu />
            <main>{children}</main>
          </div>
        </body>
      </html>
    </AuthProvider>
  );
}
