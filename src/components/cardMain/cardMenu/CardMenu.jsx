import styles from "./cardMenu.module.css"
export default function CardMenu({img, alt, text}){
    return(
        <div className={styles.cardMenu}>
            <div className={styles.cardImg}><img src={img} alt={alt} /> </div>
            <div className={styles.textContent}><h3>{text}</h3></div>   
        </div>
    )
}                                                                            