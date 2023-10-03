import returnIcon from "../../assets/returnIcon.svg"
import sendIcon from "../../assets/iconSend.svg"
import InputComponent from "../inputComponent/InputComponent"
import styles from "./cardRegister.module.css"
export default function CardRegister(){
    return(
        <section>
            <div className={styles.headerCard}>
                <img src={returnIcon} alt="icone de retorno" />
                <h1>Cadastro</h1>
            </div>
            <form className={styles.cardForm}>
                 <InputComponent label="Nome Completo:" iconClass="fa-solid fa-user" id="name" name="name"/>
                 <InputComponent label="Telefone:" iconClass="fa-solid fa-phone" id="tell" name="tell"/>    
                 <InputComponent label="Endereço:" iconClass="fa-solid fa-location-dot" id="adress" name="adress"/>
                 <InputComponent label="CPF:" iconClass="fa-solid fa-ticket-simple" id="cpf" name="cpf"/>
                 <InputComponent label="Email:" iconClass="fa-solid fa-envelope" id="email" name="email" type="email"/>
                
                
            </form>
            <button type="submit" className={styles.submitBtn}>
                <img src={sendIcon} alt="Icóne de ennvio de formulario"/>
            </button>
        </section>
    )
}