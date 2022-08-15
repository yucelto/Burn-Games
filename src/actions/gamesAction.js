import axios from "axios";
import { popularGamesURL, upcomingGamesURL, newGamesURL } from "../api";

//Action Creator

export const loadGames = () => async (dispatch) => {
  //FETCH AXIOS
  const popularGames = await axios.get(popularGamesURL());
  const upcomingGames = await axios.get(upcomingGamesURL());
  const newGames = await axios.get(newGamesURL());
  dispatch({
    type: "FETCH_GAMES",
    payload: {
      popular: popularGames.data.results,
      upcoming: upcomingGames.data.results,
      newGames: newGames.data.results,
    },
  });
};
