/* eslint-disable react/jsx-no-comment-textnodes */
/* eslint-disable @next/next/inline-script-id */
import { Html, Head, Main, NextScript } from 'next/document';
import Script from 'next/script';

export default function Document() {
	return (
		<Html>
			<Script
				strategy='lazyOnload'
				src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}`}
			/>
			<Script strategy='lazyOnload'>
				{`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}', {
                      page_path: window.location.pathname,
                  });
      `}
			</Script>
			<Head>
				<link
					href='https://fonts.googleapis.com/css2?family=Raleway:wght@100;200;300;400;500;600;700;800;900&display=swap'
					rel='stylesheet'
				></link>
				<meta name='viewport' content='initial-scale=1, width=device-width' />
			</Head>
			<body>
				<Main />
				<NextScript />
			</body>
		</Html>
	);
}
