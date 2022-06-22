import { useEffect, useState } from 'react';

import supabase from '@/configs/supabase';

export default function useUser() {
  const [user, setUser] = useState(supabase.auth.user());

  useEffect(() => {
    supabase.auth.onAuthStateChange((event, session) => {
      setUser(session?.user ?? null);
    });
  }, []);

  return user;
}
