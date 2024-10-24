
import { useState } from "react";
import { espectaculos } from "../js/espectaculos"
import Espectaculo from "./Espectaculo"
import Form from "./Form";

const Card = () => {
  const [selected, setSelected] = useState(null);
  console.log(selected);
  return (
    <div>
      { selected ? (<Form selected={selected}/>) : 
      (
        espectaculos.map((espectaculo) => (
          <Espectaculo key={espectaculo.id} recipe={espectaculo} setSelected={setSelected}/>
        ))
      )}
    </div>
  );
};

export default Card;
