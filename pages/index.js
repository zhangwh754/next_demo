import Head from "next/head";
import Link from "next/link";

import { getSortedPostsData } from "../lib/post";
import Layout, { siteTitle } from "../components/layout";
import utilStyles from "../styles/utils.module.css";
import Date from "../components/date";

export default function Home({ sortedData }) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>知耻而后勇</p>
      </section>
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Blog</h2>
        <ul className={utilStyles.list}>
          {sortedData.map(({ id, date, title }) => (
            <li key={id} className={utilStyles.listItem}>
              <Link href={`/posts/${id}`}>{title}</Link>
              <br />
              <small className={utilStyles.lightText}>
                <Date dateString={date} />
              </small>
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

// export async function getServerSideProps(context) {
//   const sortedData = await new Promise((resolve) => {
//     setTimeout(() => {
//       resolve([
//         {
//           id: 1,
//           date: "2023-11-08 10:00:04",
//           title: "try server side preRender",
//         },
//       ]);
//     }, 0);
//   });

//   return {
//     props: {
//       sortedData,
//     },
//   };
// }
