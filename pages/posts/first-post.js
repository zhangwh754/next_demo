import Link from "next/link";
import Head from "next/head";
import Layout from "../../components/layout";

export default function FirstPost() {
  return (
    <Layout>
      <Head>
        <title>first post</title>
      </Head>

      <div className="container">
        <h1>First Post</h1>
        <Link href="/">back to Home</Link>
      </div>
    </Layout>
  );
}
