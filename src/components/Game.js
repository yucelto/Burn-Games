import React from "react";
//styling and animation
import { motion } from "framer-motion";
import { StyledGame } from "../styles";
//Redux
import { useDispatch } from "react-redux";
import loadDetail from "../actions/detailAction";

const Game = ({ name, released, image, id }) => {
  //Load details
  const dispatch = useDispatch();
  const loadDetailHandler = () => {
    dispatch(loadDetail(id));
  };

  return (
    <StyledGame onClick={loadDetailHandler}>
      <h3>{name}</h3>
      <p>{released}</p>
      <img src={image} alt={name} />
    </StyledGame>
  );
};

export default Game;
