import { useState } from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';

import Header from '@/components/Header';

import '../styles/reset.scss';
import '../styles/global.scss';

// eslint-disable-next-line react/prop-types
export default function App({ Component, pageProps }) {
  const [queryClient] = useState(() => new QueryClient());

  return (
    <QueryClientProvider client={queryClient}>
      <Header />
      {/* eslint-disable-next-line react/jsx-props-no-spreading */}
      <Component {...pageProps} />
    </QueryClientProvider>
  );
}
