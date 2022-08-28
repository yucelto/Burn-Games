import styled from "styled-components";
import { motion } from "framer-motion";

export const GameList = styled(motion.div)`
  padding: 0rem 5rem;
  h2 {
    padding: 5rem 0rem;
  }
`;

export const Games = styled(motion.div)`
  min-height: 80vh;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(500px, 1fr));
`;

export const StyledGame = styled(motion.div)`
  min-height: 30vh;
  box-shadow: 0px 5px 20px rgba(0, 0, 0, 0.2);
  text-align: center;
  margin: 1rem;
  border-radius: 1rem;
  cursor: pointer;
  img {
    width: 100%;
  }
`;

export const CardShadow = styled(motion.div)`
  width: 100%;
  min-height: 100vh;
  overflow-y: scrool;
  background: rgba(0, 0, 0, 0.5);
  position: fixed;
  top: 0;
  left: 0;
  &::-webkit-scrollbar {
    width: 0.5rem;
  }
  &::-webkit-scrollbar-thumb {
    background-color: #ff7676;
  }
  &::-webkit-scrollbar-track {
    background: white;
  }
`;

export const Detail = styled(motion.div)`
  width: 80%;
  border-radius: 1rem;
  padding: 2rem 5rem;
  background: white;
  position: absolute;
  left: 10%;
  color: black;
  img {
    width: 100%;
  }
`;

export const Stats = styled(motion.div)`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Info = styled(motion.div)`
  text-align: center;
`;

export const Platforms = styled(motion.div)`
  display: flex;
  justify-content: space-evenly;
  img {
    margin-left: 3rem;
  }
`;

export const Media = styled(motion.div)`
  margin-top: 5rem;
  img {
    width: 100%;
    height: 60vh;
    object-fit: cover;
  }
`;

export const Description = styled(motion.div)`
  margin: 5rem 0rem;
`;
