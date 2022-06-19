import Header from '@/components/Header';

import '../styles/global.scss';

// eslint-disable-next-line react/prop-types
function MyApp({ Component, pageProps }) {
  return (
    <>
      <Header />
      {/* eslint-disable-next-line react/jsx-props-no-spreading */}
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
