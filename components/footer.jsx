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
                        FRESHLY BAKED? JUICY TOPPINGS? THAT&apos;S RIGHT! FRESH DAILY.
                    </h2>
                </div>
                <div className={styles.card}>
                    <h1 className={styles.title}>FIND OUR RESTAURANTS</h1>
                    <p className={styles.text}>
                        1234 St. Pizzeria #123
                        <br /> NewYork, 85022
                        <br /> (123) 456-7890
                    </p>
                    <p className={styles.text}>
                        4567 St. Pizzeria #456
                        <br /> NewYork, 85022
                        <br /> (123) 456-7890
                    </p>
                    <p className={styles.text}>
                        7891 St. Pizzeria #789
                        <br /> NewYork, 85022
                        <br /> (123) 456-7890
                    </p>
                    <p className={styles.text}>
                        1011 St. Pizzeria #101
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
                <div className={styles.mapCard}>
                    <iframe className={styles.map}
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d193595.2528001948!2d-74.14448716423327!3d40.69763123328609!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York%2C%20NY!5e0!3m2!1sen!2sus!4v1685738700380!5m2!1sen!2sus"
                        width={600}
                        height={450}
                        allowFullScreen
                    >
                    </iframe>
                </div>
            </div>
        </div>
    )
}

export default Footer;