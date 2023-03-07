import axios from "axios";
import {
  GET_POST_REQUEST,
  GET_POST_SUCCESS,
  GET_POST_FAIL,
  GET_PHOTOS_FAIL,
  GET_PHOTOS_REQUEST,
  GET_PHOTOS_SUCCESS,
} from "../Types/Type";

export const postAction = async (dispatch) => {
  try {
    dispatch({ type: GET_POST_REQUEST });
    const res = await axios.get("https://jsonplaceholder.typicode.com/posts");
    dispatch({ type: GET_POST_SUCCESS, payload: res.data });
  } catch (error) {
    dispatch({
      type: GET_POST_FAIL,
      payload:
        error.data && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const photosAction = async (dispatch) => {
  try {
    dispatch({ type: GET_PHOTOS_REQUEST });
    const res = await axios.get("https://jsonplaceholder.typicode.com/photos");
    dispatch({ type: GET_PHOTOS_SUCCESS, payload: res.data });
  } catch (error) {
    dispatch({
      type: GET_PHOTOS_FAIL,
      payload:
        error.data && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};
