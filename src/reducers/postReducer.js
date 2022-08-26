import {
  GET_ALL_POSTS_REQUEST,
  GET_ALL_POSTS_SUCCESS,
  GET_ALL_POSTS_FAIL,
  POST_POST_REQUEST,
  POST_POST_SUCCESS,
  POST_POST_FAIL,
} from '../constants/postConstants';

const getPostReducer = (state = {}, action) => {
  switch (action.type) {
    case GET_ALL_POSTS_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case GET_ALL_POSTS_SUCCESS:
      return {
        ...state,
        loading: false,
        posts: action.payload,
      };
    case GET_ALL_POSTS_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };

    default:
      return {
        ...state,
        loading: true,
      };
  }
};

const uploadPostReducer = (state = {}, action) => {
  switch (action.type) {
    case POST_POST_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case POST_POST_SUCCESS:
      return {
        ...state,
        loading: false,
        post: action.payload,
      };
    case POST_POST_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };

    default:
      return {
        ...state,
        loading: true,
      };
  }
};

export { getPostReducer, uploadPostReducer };
