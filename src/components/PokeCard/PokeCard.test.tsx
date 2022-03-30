import { render, screen } from "@testing-library/react";
import PokeCard from "./PokeCard";

describe("given a pokeCard component", () => {
  describe("when it gets props from pokeTest", () => {
    const pokeTest = {
      name: "pepe",
      number: 600,
      hp: 2,
      attackNumber: 2,
      defenseNumber: 5,
      image: "public/img/1.png",
      specialAttackNumber: 10,
    };
    test("then it should find heading with the name of the pokemon 'pepe' in the document", () => {
      render(
        <PokeCard
          attackNumber={pokeTest.attackNumber}
          defenseNumber={pokeTest.defenseNumber}
          hp={pokeTest.hp}
          name={pokeTest.name}
          number={pokeTest.number}
          image={pokeTest.image}
          specialAttackNumber={pokeTest.specialAttackNumber}
        ></PokeCard>
      );

      const name = screen.getByRole("heading", { name: /pepe 600/i });

      expect(name).toBeInTheDocument();
    });
  });
});
