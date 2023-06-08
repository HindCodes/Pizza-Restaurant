import styles from "../styles/navbar.module.css"
import Image from 'next/image';
import { useSelector } from "react-redux";
import Link from "next/link";

const Navbar = () => {

    const quantity = useSelector((state) => state.cart.quantity);

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
                    <Link href="/" passHref>
                        <li className={styles.listItem}>Homepage</li>
                    </Link>
                    <Link href="/menu" passHref>
                        <li className={styles.listItem}>Menu</li>
                    </Link>
                    <Link href="/admin/login" passHref>
                        <li className={styles.listItem}>Login</li>
                    </Link>
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
            <Link href="/cart" passHref>
                <div className={styles.item}>
                    <div className={styles.cart}>
                        <Image
                            src="/img/cart.png"
                            width={30}
                            height={30}
                            alt="logo"
                        />
                        <div className={styles.counter}>{quantity}</div>
                    </div>
                </div>
            </Link>
        </div>
    );
};

export default Navbar;