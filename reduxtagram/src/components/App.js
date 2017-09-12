import React, {Component} from 'react';
import css from './../styles/style.css';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './../store';

import AppConnect from './AppConnect';
import Photogrid from './Photogrid';
import Single from './Single';
import NotFound from './NotFound';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <BrowserRouter>
          <div>
            <Route path="/" component={AppConnect}/>
            <Switch>
                <Route exact path="/" component={Photogrid}/>
                <Route path="/view/:postId" component={Single}/>
                <Route component={NotFound}/>
              </Switch>
          </div>
        </BrowserRouter>
      </Provider>
    );
  }
}

export default App;
