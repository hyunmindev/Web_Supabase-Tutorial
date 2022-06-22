import { useMutation } from 'react-query';
import { useRouter } from 'next/router';

import SignForm from '@/components/SignForm';

import { signUp } from '@/services';

import styles from '@/styles/pages/sign.module.scss';

export default function SignIn() {
  const router = useRouter();

  const { mutate, error, isLoading, isError } = useMutation({
    mutationFn: signUp,
    onSuccess: () => router.push('/sign-in'),
  });

  return (
    <div className={styles.wrapper}>
      <h1>sign-up</h1>
      <SignForm onSubmit={mutate} />
      {isLoading && <p>Loading</p>}
      {isError && <p className={styles.error}>{error.message}</p>}
    </div>
  );
}
