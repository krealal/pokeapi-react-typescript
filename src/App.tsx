import styled from "styled-components";
import PokeCard from "./components/PokeCard/PokeCard";

const Main = styled.article`
  margin-top: 30px;
  display: flex;
  flex-direction: column;
  align-items: center;
  .imgTittle {
    width: auto;
    height: auto;
  }
  .menu {
    display: flex;
    width: 400px;
    justify-content: space-around;
    margin-top: 20px;
  }
  .menuOption {
    color: white;
  }
`;

function App() {
  return (
    <Main>
      <img src="./img/tittle.png" alt="pokeapi tittle" className="imgTittle" />
      <div className="menu">
        <a className="menuOption">Maing page</a>
        <a className="menuOption">My team</a>
        <a className="menuOption">Filter</a>
      </div>
      <PokeCard />
    </Main>
  );
}

export default App;
