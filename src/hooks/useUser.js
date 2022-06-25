import { useEffect, useState } from 'react';

import supabase from '@/configs/supabase';

export default function useUser() {
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const { access_token: accessToken } = supabase.auth.session() ?? {};
    supabase.auth.api.getUser(accessToken).then((res) => {
      setIsLoading(false);
      setUser(res.user);
    });
  }, []);

  useEffect(() => {
    supabase.auth.onAuthStateChange((event, session) => {
      setUser(session?.user ?? null);
    });
  }, []);

  return { user, isLoading };
}
