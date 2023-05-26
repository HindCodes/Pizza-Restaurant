import styles from "../styles/pizzacard.module.css"
import Image from 'next/image';

const PizzaCard = () => {
    return (
        <div className={styles.container}>
            <div className={styles.pepperoni}>
                <Image src="/img/pizza3.png" alt="" width="500" height="500" />
                <h1 className={styles.title}>CLASSIC PEPPERONI</h1>
                <span className={styles.price}>$19.90</span>
                <p className={styles.desc}>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </div>
            <div className={styles.veggie}>
                <Image src="/img/pizza2.png" alt="" width="500" height="500" />
                <h1 className={styles.title}>VEGGIE PIZZA</h1>
                <span className={styles.price}>$19.90</span>
                <p className={styles.desc}>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </div>
            <div className={styles.classic}>
                <Image src="/img/pizza1.png" alt="" width="500" height="500" />
                <h1 className={styles.title}>HOUSE SPECIAL</h1>
                <span className={styles.price}>$19.90</span>
                <p className={styles.desc}>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </div>
        </div>
    );
};

export default PizzaCard;