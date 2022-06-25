import { useEffect, useState } from 'react';

import supabase from '@/configs/supabase';

export default function useComments() {
  const [comments, setComments] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const refetch = () => {
    supabase
      .from('comments')
      .select()
      .then(({ data }) => {
        setComments(data);
        setIsLoading(false);
      });
  };
  useEffect(() => {
    refetch();
  }, []);

  return { comments, isLoading, refetch };
}
