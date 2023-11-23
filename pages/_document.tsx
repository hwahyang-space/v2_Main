import Document, { Html, Head, Main, NextScript } from 'next/document';
import Script from 'next/script';

const rootUrl = 'https://hwahyang.space';
const imageUrl = 'https://cdn.meowlabs.kr/hspace_v2/images/HwaHyang_19_Alpha.gif';

const naverVerificationCode = 'c250da1f90dc5b9a29cb3f2f0161e66657e0f7ce';
const GA4_Id = 'G-15YVBM71DX';

class CustomDocument extends Document {
	render() {
		return (
			<Html>
				<Head>
					<meta name="description" content="hwahyang.space Main"/>
					<meta name="description" content="hwahyang.space Main" />
					<link rel="icon" type="image/gif" href={imageUrl} />

					<link rel="canonical" href={rootUrl} />

					<meta name="title" content="Main" className="meta-title" />
					<meta name="description" content="hwahyang.space Main" className="meta-desc" />
					<meta name="apple-mobile-web-app-title" content="hwahyang.space" />
					<link rel="image_src" href={imageUrl} />

					<meta name="theme-color" content="#FFFFFF" />

					<meta property="og:site_name" content="HwaHyang" />
					<meta property="og:title" content="Main" />
					<meta property="og:description" content="hwahyang.space Main" />
					<meta property="og:type" content="website" />
					<meta property="og:locale" content="EN" />
					<meta property="og:url" content={rootUrl} />
					<meta property="og:image" content={imageUrl} />

					<meta name="twitter:card" content="summary" />
					<meta name="twitter:site" content="hwahyang.space" />
					<meta name="twitter:title" content="Main" />
					<meta name="twitter:description" content="hwahyang.space - Main" />
					<meta name="twitter:url" content={rootUrl} />
					<meta name="twitter:image" content={imageUrl} />

					<meta name="format-detection" content="telephone=no" />
					<meta name="format-detection" content="email=no" />

					<link
						href="https://cdn.meowlabs.kr/fonts/Pretendard.css?v=20230825"
						rel="stylesheet"
					/>
					<Script
						strategy="beforeInteractive"
						src="https://kit.fontawesome.com/6a945d59dd.js"
						crossOrigin="anonymous"
					/>

					<link
						href="https://cdn.meowlabs.kr/hspace_v2/css/Main/style.css?v=20231010"
						rel="stylesheet"
					/>

					<meta name="naver-site-verification" content={naverVerificationCode} />

					<Script
						strategy="beforeInteractive"
						src={`https://www.googletagmanager.com/gtag/js?id=${GA4_Id}`}
					/>
					<Script
						id="gtag-init"
						strategy="beforeInteractive"
						dangerouslySetInnerHTML={{
						__html: `
							window.dataLayer = window.dataLayer || [];
							function gtag(){dataLayer.push(arguments);}
							gtag('js', new Date());
							gtag('config', '${GA4_Id}', {
							page_path: window.location.pathname,
							});
						`,
						}}
					/>
				</Head>

				<Main />

				<NextScript />
			</Html>
		);
	}
}

export default CustomDocument;
