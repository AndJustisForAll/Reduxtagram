import React from 'react';
import Photo from './Photo';
import Comments from './Comments'

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actionCreators from './../actionCreators';

class Single extends React.Component {

  render() {
    const i = this.props.posts.findIndex((post) => post.code === this.props.match.params.postId);
    const post = this.props.posts[i];
    return (
      <div className="single-photo">
        <Photo i={i} post={post} {...this.props} />
        <Comments />
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


export default connect(mapStateToProps, mapDispatchToProps)(Single);
