import styles from "../styles/pizzalist.module.css"
import PizzaCard from "./pizzacard";


const PizzaList = ({ pizzaList }) => {
    return (
        <div className={styles.container}>
            <h1 className={styles.title}>THE BEST PIZZA IN TOWN</h1>
            <p className={styles.desc}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit atque ab qui esse facere mollitia, id quo libero. Exercitationem, fugit maxime soluta obcaecati aliquid explicabo quae adipisci illo. Suscipit, eaque.
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