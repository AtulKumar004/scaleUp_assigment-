import {
  FETCH_DATA_REQUEST,
  FETCH_DATA_SUCCESS,
  FETCH_DATA_FAILURE,
  DATA_FILTER_BY_NAME,
  DATA_FILTER_BY_SCORE,
  DATA_FILTER_BY_ORDER_BY,
  DATA_FILTER_RESET,
} from "./type";
import axios from "axios";

export const getVideoGameData = () => {
  return (dispatch, getState) => {
    const { data } = getState();
    if (data.length > 0) {
      return;
    }
    dispatch({ type: FETCH_DATA_REQUEST });
    axios
      .get("https://public.connectnow.org.uk/applicant-test/")
      .then((res) => {
        dispatch({ type: FETCH_DATA_SUCCESS, payload: res.data });
      })
      .catch((err) => {
        dispatch({ type: FETCH_DATA_FAILURE, payload: err.message });
      });
  };
};

export const filterByName = (name) => {
  return { type: DATA_FILTER_BY_NAME, payload: name };
};

export const filterByScore = (score) => {
    console.log("score ====>", score);
  return { type: DATA_FILTER_BY_SCORE, payload: score };
};

export const filterByOrderBy = (orderBy) => {
  return { type: DATA_FILTER_BY_ORDER_BY, payload: orderBy };
};

export const resetFilter = () => {
  return { type: DATA_FILTER_RESET };
};
