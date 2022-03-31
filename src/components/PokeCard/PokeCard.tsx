import styled from "styled-components";
import { Pokemon } from "../../types/Pokemon";

const Card = styled.div`
  background-color: white;
  width: 326px;
  overflow: hidden;
  border-radius: 16px;
  box-shadow: 2px 2px 4px rgb(0 0 0 / 70%);
  .cardHeader {
    height: 130px;
    background-color: red;
  }
  .cardBody {
    height: 187px;
    display: flex;
    flex-direction: column;
    align-items: center;
    border-bottom: 1px solid rgba(153, 153, 153, 0.383);
  }
  .pokeImage {
    width: 200px;
    height: 200px;
    border: 5px solid white;
    border-radius: 50%;
    margin-top: calc(-100px - 5px);
    background-color: white;
  }
  .pokeName {
    font-size: 18px;
    text-transform: capitalize;
    margin-top: 20px;
    margin-bottom: 12px;
  }
  .pokeNumber {
    color: #969696;
    font-weight: 400;
  }
  .pokeHp {
    color: #969696;
    font-size: 1.6rem;
    margin-top: 0;
    margin-bottom: 2rem;
    font-size: 16px;
  }
  .cardFooter {
    height: 98px;
    display: flex;
    justify-content: space-around;
  }
  .footerDiv {
    text-align: center;
    margin-top: 20px;
  }
  .statNumber {
    font-weight: bold;
    font-size: 11px;
  }
  .statTittle {
    font-size: 10px;
  }
`;

const PokeCard = ({
  name,
  number,
  hp,
  attackNumber,
  specialAttackNumber,
  defenseNumber,
  image,
}: Pokemon): JSX.Element => {
  return (
    <Card>
      <div className="cardHeader"></div>
      <div className="cardBody">
        <img src={image} alt="un pokemion" className="pokeImage" />
        <h1 className="pokeName">
          {name} <span className="pokeNumber">{number}</span>
        </h1>
        <p className="pokeHp">{hp}</p>
      </div>
      <div className="cardFooter">
        <div className="footerDiv">
          <h2 className="statNumber">{attackNumber}</h2>
          <p className="statTittle">ATTACK</p>
        </div>
        <div className="footerDiv">
          <h2 className="statNumber">{specialAttackNumber}</h2>
          <p className="statTittle">SPECIAL ATTACK</p>
        </div>
        <div className="footerDiv">
          <h2 className="statNumber">{defenseNumber}</h2>
          <p className="statTittle">DEFENSE</p>
        </div>
      </div>
    </Card>
  );
};

export default PokeCard;
