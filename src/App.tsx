import styled from "styled-components";

const Main = styled.div`
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
  }
`;

function App() {
  return (
    <Main>
      <img
        src="./img/tittle.png"
        alt="pokeapi tittle"
        className="imgTittle"
      ></img>
      <div className="menu">
        <a className="menuOption">Maing page</a>
        <a className="menuOption">My team</a>
        <a className="menuOption">Filter</a>
      </div>
    </Main>
  );
}

export default App;
