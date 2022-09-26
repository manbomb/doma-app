import styles from './InputText.module.css';

const InputText = ({
    placeholder = '',
    value = '',
    onChange = () => { },
    className = '',
    password = false,
    ...props
}) => {
    return <input
        type={password ? "password" : "text"}
        value={value}
        onChange={(ev) => onChange(ev.target.value)}
        className={`${styles.input} ${className}`}
        placeholder={placeholder}
        {...props}
    />
};

export default InputText;