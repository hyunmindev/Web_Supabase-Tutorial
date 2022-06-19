import { useState } from 'react';

import supabase from '@/configs/supabase';

export default function SignIn() {
  const [isLoading, setIsLoading] = useState(false);
  const [password, setPassword] = useState(false);
  const [email, setEmail] = useState(false);

  const signUp = async () => {
    setIsLoading(true);
    const { user, session, error } = await supabase.auth.signUp({
      email: 'example@email.com',
      password: 'example-password',
    });
    console.log(session, error);
    setIsLoading(false);
  };

  return (
    <>
      <input />
      <input />
      <button
        type="button"
        onClick={signUp}
      >
        sign-up
      </button>
    </>
  );
}
