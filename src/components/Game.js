import React from "react";
//styling and animation
import { motion } from "framer-motion";
import { StyledGame } from "../styles";

const Game = ({ name, released, image }) => {
  return (
    <StyledGame>
      <h3>{name}</h3>
      <p>{released}</p>
      <img src={image} alt={name} />
    </StyledGame>
  );
};

export default Game;
