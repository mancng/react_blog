import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { BrowserRouter, Route } from 'react-router-dom';
import ReduxPromise from 'redux-promise';

import reducers from './reducers';
import PostsIndex from './components/post_index';
import AddPost from './components/add_post';
import PostDetail from './components/post_detail';


const createStoreWithMiddleware = applyMiddleware()(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <BrowserRouter>
      <div>
        <Route path="/" component={PostsIndex}/>
        <Route path="/posts/new" component={AddPost}/>
        <Route path="/posts/:id" component={PostDetail}/>
      </div>
    </BrowserRouter>
  </Provider>
  , document.querySelector('.container'));
