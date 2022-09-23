import { useState } from "react";
import ComponenteB from "./ComponenteB";
import { ContactoClass } from "./Contacto.class";

const ComponenteA = () => {
  const [conect, setConect] = useState(true);

  const myContacto = new ContactoClass(
    "Samuel",
    "Ulloa",
    "ulloajose34@gmail.com",
    conect
  );

  const changeState = () => {
    myContacto.conectado ? setConect(false) : setConect(true);
    console.log(conect)
  };

  return (
    <div>
      <h1>Contacto</h1>
      <ComponenteB contacto={myContacto} estado={changeState} />
    </div>
  );
};

export default ComponenteA;
