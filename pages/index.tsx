import { useEffect } from 'react';
import type { GetServerSideProps, InferGetServerSidePropsType } from 'next';

import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';

import IMain_Links from '@/templates/main_links';
import IMain_BaseData from '@/templates/main_basedata';

const Home = ({baseData, linksData}: InferGetServerSidePropsType<GetServerSideProps>) => {

    useEffect(() => {
        document.body.style.backgroundImage = "url('" + baseData.backgroundImage + "')";
      
        return () => {
          document.body.style.backgroundImage = '';
        };
      }, []);

	return (<>
    <Head>
        <title>Main - hwahyang.space</title>
    </Head>
    <div className="cover"></div>
    <div className="outline">
        <div className="card">
            <div className="inner" style={{backgroundImage: "url('" + baseData.backgroundImage + "')"}}>
                <div className="front">
                    <h1 className="Pretendard-ExtraBold">{baseData.frontName}</h1>
                    <h6 className="Pretendard-Regular">Hover your mouse!</h6>
                </div>
                <div className="back">
                    <Image src={baseData.profileImage} alt="Profile Image" height={500} width={500} />
                    <h1 className="Pretendard-ExtraBold">{baseData.backName}</h1>
                    <h4 className="Pretendard-Medium">{baseData.description}</h4>
                    <p>
                        {linksData.map((data: IMain_Links, index: number) => (
                            <a key={index} href={data.link} target={data.openInNewTab ? '_blank' : ''}><i className={data.faviconId}></i>&nbsp;</a>
                        ))}
                    </p>
                </div>
            </div>
        </div>
    </div>
    <footer className="Pretendard-Light">
        <p>&copy; 2017-2023 <Link href="/">HwaHyang</Link>.</p>
    </footer>
    </>)
}

export const getServerSideProps = async () => {
    const baseRes = await fetch("https://api.hwahyang.space/api/v2/Main/baseData");
    const linksRes = await fetch("https://api.hwahyang.space/api/v2/Main/links");
    const baseData = await baseRes.json();
    const linksData = await linksRes.json();
    return {
      props: {baseData, linksData},
    }
}

export default Home;
