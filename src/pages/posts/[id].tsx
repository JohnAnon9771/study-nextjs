import { GetStaticPaths, GetStaticProps } from 'next';
import Head from 'next/head';

import { DataProps } from '..';

import { Date } from '../../components/Date';
import Layout from '../../components/Layout';

import { getAllPostIds, getPostData } from '../../lib/posts';

interface Props {
  data: DataProps;
}

export default function Post({ data }: Props): JSX.Element {
  return (
    <Layout>
      <Head>
        <title>{data.title}</title>
      </Head>
      <br />
      {data.id}
      <br />
      <Date date={data.date} />
      <div dangerouslySetInnerHTML={{ __html: data.content }} />
    </Layout>
  );
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { id } = params;
  const data = await getPostData(id);
  return {
    props: { data },
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = getAllPostIds();
  return { paths, fallback: false };
};
