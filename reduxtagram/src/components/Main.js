import React from 'react';
import {Link} from 'react-router-dom';

class Main extends React.Component {

  render() {
    return (
      <div>
        <h1>
          <Link to="/">Reduxtagram</Link>
          {this.props.children}
        </h1>
      </div>
    )
  }
}

export default Main;
