import style from './campoDeTexto.module.css';

export const CampoDeTexto = (props) => {
    return (
        <>
        <input 
        type="text" 
        autoFocus
        placeholder='Digite seu texto'
        className={style.CampoDeTexto}
        {...props}
        />
        </>
    );
};