import styles from './PrimaryButton.module.css';

const PrimaryButton = ({ label = '', onClick = () => { }, className = '' }) => {
    return <input
        type="button"
        value={label}
        onClick={onClick}
        className={`${styles.button} ${className}`}
    />;
};

export default PrimaryButton;