import style from './botao.module.css';
import { CampoDeTexto } from "../../componentes";

export const Botao = (props) => {
    return (
        <>
        <button 
        className={style.Botao}
        >
        Adicionar
        </button>
        </>
    );
};