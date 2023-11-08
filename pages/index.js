import Head from "next/head";
import { getSortedPostsData } from "../lib/post";
import Layout, { siteTitle } from "../components/layout";
import utilStyles from "../styles/utils.module.css";

export default function Home({ sortedData }) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>知耻而后勇</p>
        <p>
          (This is a sample website - you’ll be building a site like this on{" "}
          <a href="https://www.nextjs.cn/learn">our Next.js tutorial</a>.)
        </p>
      </section>
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Blog</h2>
        <ul className={utilStyles.list}>
          {sortedData.map(({ id, date, title }) => (
            <li className={utilStyles.listItem} key={id}>
              {title}
              {/* <br />
              {id} */}
              <br />
              {date.slice(0, 10)}
            </li>
          ))}
        </ul>
      </section>
    </Layout>
  );
}

export async function getStaticProps() {
  const sortedData = getSortedPostsData();

  return {
    props: { sortedData },
  };
}
