import styles from './cardHome.module.css'
import logo from"../../assets/ifomeLogo.svg"
import { Link } from 'react-router-dom'
export default function CardHome(){
    return(
        <section className={styles.cardHome}>
            <img className={styles.logoImg}src={logo} alt="Logo do Ifome" />
            <button className={styles.btn} type="button"><Link to="\login">Login</Link></button>
            <button className={styles.btn} type="button">Cadastro</button>
        </section>
    )
}