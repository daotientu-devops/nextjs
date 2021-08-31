import Link from 'next/link'
import Head from 'next/head'
import Router from 'next/router';
export default function HomePage(props) {
    return (
        <>
            <Head>
                <title>Welcome to Next.js!</title>
            </Head>
            <div>Welcome to Next.js!</div>
            <Link href="/posts/first">
                <a>First Post</a>
            </Link>
            <br/>
            <span onClick={()=>Router.push('/posts/first')}>First Post</span>
            <br/>
            <span onClick={()=>Router.push('/?counter=1', undefined, {shallow: true})}>Reload</span>
            <br/>
            <div>Next stars: {props.stars}</div>   
            <img src="/logo.png" alt="Logo"/>
        </>
    )
}
export async function getServerSideProps(context) {
    const res = await fetch('https://api.github.com/repos/vercel/next.js');
    const json = await res.json()
    return {
        props: {stars: json.language}
    }
}