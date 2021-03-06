import React from "react";
import { useParams } from "react-router";
import { Characters } from "../models/Characters";

const CharacterScreen = ({ history }) => {
  const { id } = useParams();

  const { type, name, description } = Characters.find(
    (character) => character.id === id
  );

  const path = `/assets/${type}-${id}.png`;

  const handleBack = () => {
    history.goBack();
  };

  return (
    <div className="container row mt-5">
      <div className="col-8">
        <img
          className="img-thumbnail "
          style={{
            width: "70%",
            height: "400px",
          }}
          src={path}
          alt={id}
        />
      </div>
      <div className="col-4">
        <h2 className="text-center">Ouffit:<br></br> {name}</h2>
        <p className="text-center">Descripción:<br></br> {description}</p>

        <button onClick={handleBack} className="btn btn-outline-warning">
          Atrás
        </button>
      </div>
    </div>
  );
};

export default CharacterScreen;
