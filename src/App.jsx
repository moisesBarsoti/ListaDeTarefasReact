import { Cabecalho, Conteudo, Rodape } from './componentes';
import { Inicial } from './pages';
import './App.css';

const App = () => {
  return (
    <>
      <Cabecalho nameUser="Moisés"/>
      <Conteudo>
          <Inicial />
      </Conteudo>
      <Rodape />
    </>
  )
}

export {App};