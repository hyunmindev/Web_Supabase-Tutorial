import { useState } from 'react';

import useComments from '@/hooks/useComments';
import useUser from '@/hooks/useUser';

import supabase from '@/configs/supabase';

import styles from '@/styles/pages/home.module.scss';

export default function Index() {
  const { comments, isLoading: isCommentsLoading, refetch } = useComments();
  const { user, isLoading: isUserLoading } = useUser();
  const [comment, setComment] = useState('');

  if (isCommentsLoading || isUserLoading) {
    return <div className={styles.wrapper}>Loading...</div>;
  }

  const handleClick = () => {
    supabase
      .from('comments')
      .insert({
        user_id: user.id,
        content: comment,
      })
      .then(() => {
        setComment('');
        refetch();
      });
  };

  return (
    <div className={styles.wrapper}>
      <div>
        {comments.map(({ id, content }) => (
          <p
            className={styles.comment}
            key={id}
          >
            {content}
          </p>
        ))}
      </div>
      <div>
        <input
          value={comment}
          disabled={!user}
          onChange={({ target: { value } }) => setComment(value)}
          placeholder={!user ? 'sign in first' : 'write a comment'}
        />
        <button
          type="button"
          onClick={handleClick}
        >
          submit
        </button>
      </div>
    </div>
  );
}
