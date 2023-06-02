import styles from "../styles/pizzalist.module.css"
import PizzaCard from "./pizzacard";


const PizzaList = ({ pizzaList }) => {
    return (
        <div className={styles.container}>
            <h1 className={styles.title}>THE BEST PIZZA IN TOWN</h1>
            <p className={styles.desc}>
                Are you hungry for pizza? Well you came to the right place! Look no further as you will find more than your pizza cravings can handle! Choose from our many AMAZING options and order now!
                While you wait, just imagine all the delicious flavors prepared to the BEST standards. Not convinced? Taste it for yourself!
            </p>
            <div className={styles.wrapper}>
                {pizzaList.map((pizza) => (
                    <PizzaCard key={pizza._id} pizza={pizza} />
                ))}
            </div>
        </div>
    );
};

export default PizzaList;