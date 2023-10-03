import styles from "./input.module.css"
export default function InputComponent({label, iconClass, id, name, type = "text"}){  
    return(
        <>
            <label  htmlFor="name" className={styles.inputLabel}>{label}</label>
                <div className={styles.inputWrapper}>
                    <i className={`${iconClass} ${styles.iconInput}`}></i>
                    <input type={type} name={name} id={id}/>
                </div>
        </>
    )

}