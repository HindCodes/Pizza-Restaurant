import styles from "../styles/footer.module.css";
import Image from 'next/image';

const Footer = () => {
    return (
        <div className={styles.container}>
            <div className={styles.item}>
                <Image src="/img/bg.avif" layout="fill" alt=""></Image>
            </div>
            <div className={styles.item}>
                <div className={styles.card}>
                    <h2 className={styles.motto}>
                        FRESHLY BAKED? JUICY TOPPINGS? THAT'S RIGHT! FRESH DAILY.
                    </h2>
                </div>
                <div className={styles.card}>
                    <h1 className={styles.title}>FIND OUR RESTAURANTS</h1>
                    <p className={styles.text}>
                        1234 St. Pizzeria #456
                        <br /> NewYork, 85022
                        <br /> (123) 456-7890
                    </p>
                    <p className={styles.text}>
                        1234 St. Pizzeria #456
                        <br /> NewYork, 85022
                        <br /> (123) 456-7890
                    </p>
                    <p className={styles.text}>
                        1234 St. Pizzeria #456
                        <br /> NewYork, 85022
                        <br /> (123) 456-7890
                    </p>
                    <p className={styles.text}>
                        1234 St. Pizzeria #456
                        <br /> NewYork, 85022
                        <br /> (123) 456-7890
                    </p>
                </div>
                <div className={styles.card}>
                    <h1 className={styles.title}>WORKING HOURS</h1>
                    <p className={styles.text}>
                        MONDAY THRU FRIDAY
                        <br /> 9:00AM - 10:00PM
                    </p>
                    <p className={styles.text}>
                        SATURDAY - SUNDAY
                        <br /> 11:00AM - 1:00AM
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Footer