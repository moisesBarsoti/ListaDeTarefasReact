import style from './conteudo.module.css'

export const Conteudo = (props) => {
    const { children } = props;
    return (
        <div className={style.Conteudo}>
            {children} 
        </div>
    )
}