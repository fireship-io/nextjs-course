import AuthCheck from '@/components/AuthCheck/AuthCheck';
import Link from 'next/link';
import SignInButton from '../SignInButton';
import SignOutButton from '../SignOutButton';
import styles from './NavMenu.module.css';

export default function NavMenu() {
  return (
    <nav className={styles.nav}>
      <Link className={styles.logoText} href={'/'}>
        gl
        <img
          className={styles.logoImage}
          src="/icon.svg"
          alt="globle logo"
        />
        ble
      </Link>
      <ul className={styles.links}>
        <li>
          <SignInButton />
        </li>

        <li>
          <AuthCheck>
            <SignOutButton />
          </AuthCheck>
        </li>
      </ul>
    </nav>
  );
}
