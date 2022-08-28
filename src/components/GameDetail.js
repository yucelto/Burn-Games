import React from "react";
//Styling
import { motion } from "framer-motion";
import {
  CardShadow,
  Detail,
  Stats,
  Info,
  Platforms,
  Media,
  Description,
} from "../styles";
//Redux
import { useSelector } from "react-redux";

const GameDetail = () => {
  //data
  //   const detail = useSelector((state) => state.detail);
  const { screen, game } = useSelector((state) => state.detail);
  return (
    <CardShadow>
      <Detail>
        <Stats>
          <div className="rating">
            <h3>{game.name}</h3>
            <p>Rating: {game.rating}</p>
          </div>
          <Info>
            <h3>Platforms</h3>
            <Platforms>
              {game.platforms.map((data) => (
                <h3 key={data.platform.id}>{data.platform.name}</h3>
              ))}
            </Platforms>
          </Info>
        </Stats>
        <Media>
          <img src={game.background_image} alt="game_image" />
        </Media>
        <Description>
          <p>{game.description_raw}</p>
        </Description>
        <div className="gallery">
          {screen.results.map((screen) => (
            <img src={screen.image} alt="game" key={screen.id} />
          ))}
        </div>
      </Detail>
    </CardShadow>
  );
};

export default GameDetail;
