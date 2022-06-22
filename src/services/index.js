import supabase from '@/configs/supabase';

export const signUp = async ({ email, password }) => {
  const { user, session, error } = await supabase.auth.signUp({ email, password });
  if (error) {
    throw error;
  }
};

export const signIn = async ({ email, password }) => {
  const { user, session, error } = await supabase.auth.signIn({ email, password });
  if (error) {
    throw error;
  }
};

export const signOut = async () => {
  const { error } = await supabase.auth.signOut();
  if (error) {
    throw error;
  }
};
