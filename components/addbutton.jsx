import styles from "../styles/add.module.css"

const AddButton = ({ setClose }) => {
    return (
        <div onClick={() => setClose(false)} className={styles.mainAddButton}>
            Add New pizza
        </div>
    );
};

export default AddButton;