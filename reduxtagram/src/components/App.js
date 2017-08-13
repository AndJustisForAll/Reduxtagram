import React, {Component} from 'react';
import css from './../styles/style.styl';
import {BrowserRouter, Switch, Route} from 'react-router-dom';

import Main from './Main';
import Single from './Single';
import NotFound from './NotFound';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Main}/>
          <Route path="/view/:postId" component={Single}/>
          <Route component={NotFound}/>
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
