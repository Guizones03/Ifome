import { Link } from "react-router-dom"
import logoIfome from "../../assets/ifomeLogo.svg"
import returnIcon from "../../assets/returnIcon.svg"
import styles from "./cardLogin.module.css"
export default function CardLogin(){
  return(
    <section className={styles.cardLogin}>
        <img src={returnIcon} className={styles.return} alt="icone de flecha referencia ao retorno" />
        <img src={logoIfome} alt="Logo do Ifome" />
        <form action="" className={styles.formLogin}>
            <label className={styles.label} htmlFor="userID">CPF/CNPJ</label>
            <input className={styles.input} type="text" name="userID" id="userID"/>
            
            <label className={styles.label} htmlFor="password">Senha</label>
            <input className={styles.input} type="password" name="password" id="password"/>

            <button className={styles.subtmitBtn}  type="submit"><Link to="/home">Entrar</Link></button>
       </form>
    </section>
)
}