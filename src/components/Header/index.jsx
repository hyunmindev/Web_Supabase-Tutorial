import Link from 'next/link';

import styles from './index.module.scss';

export default function Header() {
  return (
    <div className={styles.Wrapper}>
      <Link href="/">
        <a>home</a>
      </Link>
      <Link href="/sign-in">
        <a>sign-in</a>
      </Link>
    </div>
  );
}
