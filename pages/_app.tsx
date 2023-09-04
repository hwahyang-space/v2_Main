import { useEffect, useState } from 'react';
import App, { AppContext } from 'next/app';
import type { AppProps } from 'next/app';

export default function MyApp({ Component, pageProps }: AppProps) {
	const [mounted, setMounted] = useState<boolean>(false);

	useEffect(() => {
		setMounted(true);
	}, []);

	return mounted && <Component {...pageProps} />;
}

MyApp.getInitialProps = async (appContext: AppContext) => {
	const appProps = await App.getInitialProps(appContext);

	if (appContext.ctx.res?.statusCode === 403 || appContext.ctx.res?.statusCode === 404) {
		appContext.ctx.res.writeHead(302, { Location: '/' });
		appContext.ctx.res.end();
	}

	return { ...appProps };
};
