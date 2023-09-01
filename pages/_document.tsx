import Document, { Html, Head, Main, NextScript } from 'next/document';
import Script from "next/script";

const rootUrl = "https://hwahyang.space"
const imageUrl = "https://cdn.hwahyang.space/hspace_v2/images/HwaHyang_19_Alpha.gif";

class CustomDocument extends Document {
	render() {
		return (
			<Html>
				<Head>
					<meta name="description" content="hwahyang.space"/>
					<link rel="icon" type="image/gif" href={imageUrl}/>

					<link rel="canonical" href={rootUrl}/>

					<meta name="title" content="Main" className="meta-title"/>
					<meta name="description" content="hwahyang.space" className="meta-desc"/>
					<meta name="apple-mobile-web-app-title" content="hwahyang.space"/>
					<link rel="image_src" href={imageUrl}/>

					<meta name="theme-color" content="#FFFFFF"/>

					<meta property="og:site_name" content="hwahyang.space"/>
					<meta property="og:title" content="Main"/>
					<meta property="og:description" content="HwaHyang"/>
					<meta property="og:type" content="website"/>
					<meta property="og:locale" content="EN"/>
					<meta property="og:url" content={rootUrl}/>
					<meta property="og:image" content={imageUrl}/>

					<meta name="twitter:card" content="summary"/>
					<meta name="twitter:site" content="hwahyang.space"/>
					<meta name="twitter:title" content="Main"/>
					<meta name="twitter:description" content="HwaHyang"/>
					<meta name="twitter:url" content={rootUrl}/>
					<meta name="twitter:image" content={imageUrl}/>

					<meta name="format-detection" content="telephone=no"/>
					<meta name="format-detection" content="email=no"/>

					<link href="https://cdn.hwahyang.space/hspace_v2/fonts/Pretendard.css" rel="stylesheet"/>
					<Script strategy="beforeInteractive" src="https://kit.fontawesome.com/6a945d59dd.js" crossOrigin="anonymous" />

					<link href="https://cdn.hwahyang.space/hspace_v2/css/Main/style.css" rel="stylesheet"/>
				</Head>

				<Main />

				<NextScript />
			</Html>
		);
	}
}

export default CustomDocument;