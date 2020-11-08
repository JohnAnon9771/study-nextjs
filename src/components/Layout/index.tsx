import { ReactNode } from 'react';

import Head from 'next/head';
import Link from 'next/link';

import { Container, Header } from './styles';

const name = 'João Alves';
export const siteTitle = 'Next.js Sample Website';

interface Props {
  home?: boolean;
  children?: ReactNode;
}

export default function Layout({ children, home }: Props): JSX.Element {
  return (
    <Container>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="description"
          content="Learn how to build a personal website using Next.js"
        />
        <meta
          property="og:image"
          content={`https://og-image.now.sh/${encodeURI(
            siteTitle,
          )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
        />
        <meta name="og:title" content={siteTitle} />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      <Header>
        {home ? (
          <>
            <img
              src="/images/profile.png"
              className="headerHomeImg"
              alt={name}
            />
            <h1>{name}</h1>
          </>
        ) : (
          <>
            <Link href="/">
              <a>
                <img
                  src="/images/profile.png"
                  className="headerImg"
                  alt={name}
                />
              </a>
            </Link>
            <h2>
              <Link href="/">
                <a>{name}</a>
              </Link>
            </h2>
          </>
        )}
      </Header>
      <main>{children}</main>
      {!home && (
        <div className="backToHome">
          <Link href="/">
            <a>← Back to home</a>
          </Link>
        </div>
      )}
    </Container>
  );
}
