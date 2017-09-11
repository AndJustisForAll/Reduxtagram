import {createStore, compose}  from 'redux';
// import {syncHistoryWithStore} from 'react-router-redux';


//import root reducer
import rootReducer from './reducers/index';

import comments from './data/comments';
import posts from './data/posts';

//create an obj for default data
const defaultState = {
  posts,
  comments
};

const store = createStore(rootreducer, defaultState);

export default store;
