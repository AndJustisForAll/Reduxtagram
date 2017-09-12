import React from 'react';
import Photo from './Photo';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actionCreators from './../actionCreators';

class Photogrid extends React.Component {
  render() {
    return (
      <div className="photo-grid">
        {this.props.posts.map((post,i) => <Photo {...this.props} key={i} i={i} post={post} />)}
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    posts: state.posts,
    comments: state.comments
  }
}

function mapDispatchToProps(dispatch) {
  return  bindActionCreators(actionCreators, dispatch);
}


export default connect(mapStateToProps, mapDispatchToProps)(Photogrid);
