import returnIcon from "../../assets/returnIcon.svg"
import sendIcon from "../../assets/iconSend.svg"
import InputComponent from "./InputComponent"
export default function CardRegister(){
    return(
        <section className={styles.card}>
            <img src={returnIcon} alt="icone de retorno" />
            <h1>Cadastro</h1>
            <form>
                 <InputComponent
                    label="Nome Completo"
                    iconClass="fa-solid fa-user"
                    id="name"
                    name="name"
                 />
                

                
                
            </form>
            <button type="submit">
                <img src={sendIcon} alt="Icóne de ennvio de formulario"/>
            </button>
        </section>
    )
}