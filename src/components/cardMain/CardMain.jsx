import CardMenu from "./cardMenu/CardMenu";
import styles from "./main.module.css"
import solicitationImg from "../../assets/img/solicitacion.svg"
export default function CardMain(){
    return(
        <section className={styles.mainCard}>
            <CardMenu text="Solicitar" img={solicitationImg} alt="voluntarios ajudando na distribuição de alimentos"/>
            <CardMenu text="Solicitar" img={solicitationImg} alt="voluntarios ajudando na distribuição de alimentos"/>
            <CardMenu text="Solicitar" img={solicitationImg} alt="voluntarios ajudando na distribuição de alimentos"/>
        </section>
        )
}