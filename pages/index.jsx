import Head from 'next/head'
import { GraphQLClient, gql } from 'graphql-request'
import styles from '../styles/Home.module.css';
import Card from '../components/Card'

const graphcms = new GraphQLClient('https://api-eu-central-1-shared-euc1-02.hygraph.com/v2/clal2b1qv1eqq01ta3nbi9x2w/master');

const QUERY = gql`
  {
    items {
      title,
      url,
      id,
      image {
      url,
      id,
    }
    }
  }
`;

export async function getStaticProps() {
  const {items} = await graphcms.request(QUERY);
  return {
    props: {
      items,
    },
    revalidate: 10,
  }; 
};

export default function Home({items}) {
  return (
    <div>
      <Head>
        <title>Isacs önskelista!</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.container}>
        {items.map((item) =>(
          <Card title={item.title} image={item.image.url} url={item.url} />
        ))}
      </main>

      </div>

    
  )
}