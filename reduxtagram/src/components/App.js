import React, {Component} from 'react';
import css from './../styles/style.css';
import {BrowserRouter, Switch, Route} from 'react-router-dom';

import Main from './Main';
import Photogrid from './Photogrid';
import Single from './Single';
import NotFound from './NotFound';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Route path="/" component={Main}/>
          <Switch>
              <Route exact path="/" component={Photogrid}/>
              <Route path="/view/:postId" component={Single}/>
              <Route component={NotFound}/>
            </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
