import Link from 'next/link'
import Head from 'next/head'
import Router from 'next/router';
import useSWR from 'swr';
export default function HomePage(props) {
    const fetcher = (...args) => fetch(...args).then(res => res.json())
    const { data, error } = useSWR('http://127.0.0.1:8000/users/count', fetcher, {refreshInterval: 10000});
    console.log(data);
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
            <div>Total users: {data}</div>
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