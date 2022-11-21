import { useState } from "react";
import ShowKeys from "./ShowKeys";
const solution = [
  "q",
  "r",
  "y",
  "r",
  "r",
  "q",
  "r",
  "r",
  "y",
  "t",
  "y",
  "6",
  "y",
  "t",
  "r",
  "e",
  "e",
  "q",
  "w",
  "e",
  "e",
  "r",
];

const PianoIntro = () => {
  const [show, setShow] = useState(false);

  return (
    <div className="flex mt-10 px-10 flex-col mx-auto">
      <h1 className="text-2xl text-center my-2">
        La profe Meli se tomó muy a pecho su recibida...
      </h1>

      <p className="text-center">
        Pide que toques el "Arroz con leche" (en FaM) para recibir tu
        invitación!
      </p>
      <p className="text-center">
        Pista (
        <button
          className="rounded bg-teal-600 text-white px-1 py-1 md:px-2 text-xs mx-1 mt-2"
          onClick={() => setShow(!show)}
        >
          Mostrar orden de las notas
        </button>
        )
      </p>
      <div className={`mx-auto ${show ? "" : "hidden"}`}>
        <ShowKeys keys={solution} tiny={true} />
      </div>
      <p className="text-center mt-2">
        (pista de yapa: las teclas apretadas que se muestran son solo las que
        deben usarse &#128521;)
      </p>
    </div>
  );
};

export default PianoIntro;
