import axios from "axios";
import Head from 'next/head';
import Image from 'next/image';
import Featured from '../components/featured';
import PizzaList from '../components/pizzalist';
import styles from "../styles/Home.module.css";

export default function Home({pizzaList}) {

  return (
    <div className={styles.container}>
      <Head>
        <title>Pizza Resaurant in New York</title>
        <meta name="description" content="Best Pizza Shop in Town!"/>
        <link rel="icon" href="/img/icon.png" />
      </Head>
      <Featured/>
      <PizzaList pizzaList={pizzaList}/>
    </div>
  );
}

export const getServerSideProps = async () => {
  const res = await axios.get("http://localhost:3000/api/products");

  return {
    props: {
      pizzaList: res.data,
    }
  }
};