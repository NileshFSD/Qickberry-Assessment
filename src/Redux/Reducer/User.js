import {
  GET_POST_REQUEST,
  GET_POST_SUCCESS,
  GET_POST_FAIL,
  GET_PHOTOS_FAIL,
  GET_PHOTOS_REQUEST,
  GET_PHOTOS_SUCCESS,
} from "../Types/Type";

export const postReducer = (state = { post: [] }, action) => {
  switch (action.type) {
    case GET_POST_REQUEST:
      return { loading: true, post: [] };
    case GET_POST_SUCCESS:
      return { loading: false, post: action.payload };
    case GET_POST_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const photoReducer = (state = { photos: [] }, action) => {
  switch (action.type) {
    case GET_PHOTOS_REQUEST:
      return { loading: true, photos: [] };
    case GET_PHOTOS_SUCCESS:
      return { loading: false, photos: action.payload };
    case GET_PHOTOS_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};
