import style from './cabecalho.module.css';

export const Cabecalho = (props) => {
    return(
        <div className={style.Cabecalho}>
            <h1>
                Lista de 
                <span>Tarefas</span>
            </h1>
        </div>
    );
};
