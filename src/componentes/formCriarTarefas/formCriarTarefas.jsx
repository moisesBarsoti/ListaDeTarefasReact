import { Botao, CampoDeTexto } from "../../componentes";
import style from './formCriarTarefas.module.css';

export const FormCriarTarefas = () => {
    return(
        <>
        <form action="" className={style.FormCriarTarefas}>
            <CampoDeTexto />  
            <Botao />  
        </form>
        </>  
    );
}