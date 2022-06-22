import { useEffect, useState } from 'react';
import Link from 'next/link';
import { useMutation } from 'react-query';

import useUser from '@/hooks/useUser';

import { signOut } from '@/services';

import styles from './index.module.scss';

export default function Header() {
  const user = useUser();
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    setIsAuthenticated(user !== null);
  }, [user]);

  const { mutate } = useMutation(signOut);

  return (
    <div className={styles.wrapper}>
      <Link href="/">
        <a>home</a>
      </Link>
      {!isAuthenticated && (
        <>
          <Link href="/sign-in">
            <a>sign-in</a>
          </Link>
          <Link href="/sign-up">
            <a>sign-up</a>
          </Link>
        </>
      )}
      {isAuthenticated && (
        <button
          type="button"
          onClick={mutate}
        >
          sign-out
        </button>
      )}
    </div>
  );
}
