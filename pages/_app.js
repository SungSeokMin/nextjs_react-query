import '../styles/globals.css';

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import axios from 'axios';
import { Toaster } from 'react-hot-toast';
import Layout from '../components/layout/Layout';

axios.defaults.baseURL = 'https://www.themealdb.com/api/json/v1/1';

const quertClient = new QueryClient({
  defaultOptions: {
    queries: {
      cacheTime: 1 * 60 * 60 * 1000,
      staleTime: 1 * 60 * 60 * 1000,
    },
  },
});

function MyApp({ Component, pageProps }) {
  return (
    <QueryClientProvider client={quertClient}>
      <Toaster
        position="bottom-right"
        toastOptions={{
          toastOptions: {
            style: {
              fontSize: '1.4rem',
            },
          },
        }}
      />

      <Layout>
        <Component {...pageProps} />
      </Layout>
      <ReactQueryDevtools />
    </QueryClientProvider>
  );
}

export default MyApp;
