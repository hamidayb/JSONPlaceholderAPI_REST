import { applyMiddleware, combineReducers, createStore } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import { getPostReducer, uploadPostReducer } from './reducers/postReducer';

const reducer = combineReducers({
  posts: getPostReducer,
  uploadPost: uploadPostReducer,
});

const middleware = [thunk];

const store = createStore(
  reducer,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
