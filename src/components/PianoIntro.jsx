import ShowKeys from "./ShowKeys";

const PianoIntro = () => {
  return (
    <div className="flex mt-10 w-[280px] md:w-[450px] flex-col mx-auto">
      <h1>La profe Meli se tomó muy a pecho su recibida... </h1>

      <p>Tocá el "Arroz con leche" (en FaM) para recibir tu invitación:</p>
      <p>Pista(orden de notas):</p>
      <ShowKeys
        keys={[
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
        ]}
        tiny={true}
      />
      <p>
        (pista de yapa: las teclas apretadas que se muestra son solo las que
        deben usarse &#128521;)
      </p>
      <button>Ni ganas! Dame mi invitación!</button>
    </div>
  );
};

export default PianoIntro;
