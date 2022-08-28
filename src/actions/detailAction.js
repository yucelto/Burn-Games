import axios from "axios";
import { gameDetailUrl, gameScreenshotUrl } from "../api";

const loadDetail = (id) => async (dispatch) => {
  const detailData = await axios.get(gameDetailUrl(id));
  const screenShotData = await axios.get(gameScreenshotUrl(id));
  dispatch({
    type: "GET_DETAIL",
    payload: {
      game: detailData.data,
      screen: screenShotData.data,
    },
  });
};

export default loadDetail;
