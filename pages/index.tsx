import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';

const Home = () => {
	return (<>
    <Head>
        <title>Main - hwahyang.space</title>
    </Head>
    <body style={{backgroundImage: "url('https://cdn.hwahyang.space/hspace_v2/images/20200902_B.png')"}}>
        <div className="outline">
            <div className="card">
                <div className="inner" style={{backgroundImage: "url('https://cdn.hwahyang.space/hspace_v2/images/20200902_B.png')"}}>
                    <div className="front">
                        <h1 className="Pretendard-ExtraBold">KangHyeon Kim</h1>
                        <h6 className="Pretendard-Regular">Hover your mouse!</h6>
                    </div>
                    <div className="back">
                        <Image src="https://cdn.hwahyang.space/hspace_v2/images/HwaHyang_37_Alpha.png" alt="Profile Image" height={500} width={500} />
                        <h1 className="Pretendard-ExtraBold">HwaHyang</h1>
                        <h4 className="Pretendard-Medium">Game Developer</h4>
                        <p>
                            <a href="https://pf.hwahyang.space"><i className="fa-solid fa-house"></i></a>&nbsp;
                            <a href="https://twitter.com/_hwahyang_" target="_blank"><i className="fa-brands fa-twitter"></i></a>&nbsp;
                            <a href="https://github.com/hwahyang1" target="_blank"><i className="fa-brands fa-github"></i></a>&nbsp;
                            <a href="mailto:me@hwahyang.space"><i className="fa-solid fa-envelope"></i></a>&nbsp;
                            <a href="https://dash.hwahyang.space"><i className="fa-solid fa-arrow-right-to-bracket"></i></a>
                        </p>
                    </div>
                </div>
            </div>
        </div>
        <footer className="Pretendard-Light">
            <p>&copy; 2017-2023 <Link href="/">HwaHyang</Link>.</p>
        </footer>
    </body>
    </>)
}

export default Home;