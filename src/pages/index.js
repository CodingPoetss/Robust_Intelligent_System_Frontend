import Head from "next/head";
import dynamic from 'next/dynamic'
const Framework = dynamic(
    () => import('@/components/Framework'),
    { ssr: false },
)



// pages/index.js
export default function Home() {
    return (
        <>
            <Head>
                <title>鲁棒性智能车牌识别系统</title>
            </Head>
            {/* <Link href="/login/SignIn">
                SignIn
            </Link>
            <Link href="/">
                SignUp
            </Link> */}
            <Framework />
        </>
    );
}
