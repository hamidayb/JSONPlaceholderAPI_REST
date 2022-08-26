import {
  GET_ALL_POSTS_REQUEST,
  GET_ALL_POSTS_SUCCESS,
  GET_ALL_POSTS_FAIL,
  POST_POST_REQUEST,
  POST_POST_SUCCESS,
  POST_POST_FAIL,
} from '../constants/postConstants';
import axios from 'axios';

export const getAllPosts = () => async (dispatch, getState) => {
  try {
    dispatch({ type: GET_ALL_POSTS_REQUEST });
    const { data } = await axios.get(
      'https://jsonplaceholder.typicode.com/posts'
    );
    dispatch({ type: GET_ALL_POSTS_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: GET_ALL_POSTS_FAIL, payload: error });
  }
};

export const uploadPost = (post) => async (dispatch, getState) => {
  try {
    dispatch({ type: POST_POST_REQUEST });
    const config = {
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    };
    const { data } = await axios.post(
      'https://jsonplaceholder.typicode.com/posts',
      post,
      config
    );
    dispatch({ type: POST_POST_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: POST_POST_FAIL, payload: error });
  }
};
