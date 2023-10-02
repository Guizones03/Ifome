import styles from './Component.module.css'
export default function InputComponent({label, iconClass, id, name}){  
    return(
        <>
            <label  htmlFor="name" className={styles.label}>{label}</label>
                <div className={styles.inputWrapper}>
                    <i class={`${iconClass} ${styles.iconInput}`}></i>
                    <input type="text" name={name} id={id}/>
                </div>
        </>
    )

}