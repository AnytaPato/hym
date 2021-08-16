import React from "react";
import Card from "../components/Card";
import { Characters } from "../models/Characters";

const KidsScreen = () => {
  const kids = Characters.filter((character) => character.type === "k");

  return (
    <div className="container mt-3">
      <h1 className="text-center">Ouffit Niños</h1>
      <hr />
      <div className="row">
        {kids.map((kids) => (
          <Card key={kids.id} {...kids} />
        ))}
      </div>
    </div>
  );
};

export default KidsScreen;