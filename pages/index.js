import Head from 'next/head';
import Image from 'next/image';
import Featured from '../components/featured';
import PizzaList from '../components/pizzalist';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Pizza Resaurant in New York</title>
        <meta name="description" content="Best Pizza Shop in Town!"/>
        <link rel="icon" href="/img/icon.png" />
      </Head>
      <Featured/>
      <PizzaList/>
    </div>
  );
}
