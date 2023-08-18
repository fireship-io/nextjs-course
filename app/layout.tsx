import NavMenu from '@/app/NavMenu';
import './globals.css';
import { Overpass } from 'next/font/google';
import Link from 'next/link';
import AuthProvider from './AuthProvider';

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

            <footer>
              <ul>
                <li>
                  <Link href={'/about'}>About</Link>
                </li>
                |
                <li>
                  <Link href={'/login'}>Source Code</Link>
                </li>
              </ul>
            </footer>
          </div>
        </body>
      </html>
    </AuthProvider>
  );
}
