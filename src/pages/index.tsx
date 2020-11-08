import { GetStaticProps } from 'next';
import Head from 'next/head';
import Link from 'next/link';

import { Date } from '../components/Date';
import Layout, { siteTitle } from '../components/Layout';

import { getSortedPostsData } from '../lib/posts';

export interface DataProps {
  id: string;
  title: string;
  date: string;
  content: string;
}

interface Props {
  data: DataProps[];
}

export default function Home({ data }: Props): JSX.Element {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section>
        <p>[Your Self Introduction]</p>
        <p>
          (This is a sample website - you’ll be building a site like this on{' '}
          <a href="https://nextjs.org/learn">our Next.js tutorial</a>.)
        </p>
      </section>
      <section>
        <h2>Blog</h2>
        <ul>
          {data.map(({ id, date, title }) => (
            <li key={id}>
              <Link href={`/posts/${id}`}>
                <a>{title}</a>
              </Link>
              <br />
              {id}
              <br />
              <small>
                <Date date={date} />
              </small>
            </li>
          ))}
        </ul>
      </section>
    </Layout>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      data: allPostsData,
    },
    revalidate: 10,
  };
};
