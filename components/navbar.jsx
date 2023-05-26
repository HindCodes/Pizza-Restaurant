import styles from "../styles/navbar.module.css"
import Image from 'next/image';

const Navbar = () => {
    return (
        <div className={styles.container}>
            <div className={styles.item}>
                <div className={styles.callButton}>
                    <Image
                        src="/img/telephone.png"
                        width={32}
                        height={32}
                        alt=""
                    />
                </div>
                <div className={styles.texts}>
                    <div className={styles.text}>ORDER NOW!</div>
                    <div className={styles.text}>1 234-567</div>
                </div>

            </div>
            <div className={styles.item}>
                <ul className={styles.list}>
                    <li className={styles.listItem}>Homepage</li>
                    <li className={styles.listItem}>Products</li>
                    <li className={styles.listItem}>Menu</li>
                    <Image
                        src="/img/logo.svg"
                        width={100}
                        height={100}
                        alt="logo"
                    />
                    <li className={styles.listItem}>Events</li>
                    <li className={styles.listItem}>Blog</li>
                    <li className={styles.listItem}>Contact</li>
                </ul>
            </div>
            <div className={styles.item}>
                <div className={styles.cart}>
                    <Image
                        src="/img/cart.png"
                        width={30}
                        height={30}
                        alt="logo"
                    />
                    <div className={styles.counter}>2</div>
                </div>
            </div>
        </div>
    );
};

export default Navbar