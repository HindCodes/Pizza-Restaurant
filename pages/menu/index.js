import styles from '../../styles/menu.module.css'
import Image from 'next/image';
import Link from 'next/link';

const MenuPage = () => {
    return (
      <div className={styles.container}>
        <h1 className={styles.header}>MENU</h1>
            <p className={styles.info}>
                Check out all of our delicious mouthwatering menu items here! Not only do we sell our renouned pizza but also lots other delicious options!
            </p>
        <div className={styles.wrapper}>
            <div className={styles.card}>
                <Image
                src="/img/1.png" alt="" width={1000} height={1000}/>
            </div>
            <div className={styles.card}>
                <Image
                src="/img/2.png" alt="" width={1000} height={1000}/>
            </div>
            <div className={styles.card}>
                <Image
                src="/img/3.png" alt="" width={1000} height={1000}/>
            </div>
        </div>
      </div>
    );
  };
  
  export default MenuPage;