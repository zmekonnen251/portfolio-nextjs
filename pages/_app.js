import Navbar from '../components/Navbar';
import '../styles/globals.css';
import Script from 'next/script';
import Head from 'next/head';

function MyApp({ Component, pageProps }) {
	return (
		<>
			<Script
				strategy='lazyOnload'
				src={'https://www.googletagmanager.com/gtag/js?id=G-K5ZZ3PNWXC'}
			/>
			<Script strategy='lazyOnload' id=''>
				{`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-K5ZZ3PNWXC', {
                      page_path: window.location.pathname,
                  });
      `}
			</Script>

			<Head>
				<meta name='viewport' content='initial-scale=1, width=device-width' />
			</Head>
			<Navbar />
			<Component {...pageProps} />
		</>
	);
}

export default MyApp;
