import React from 'react';
import Photo from './Photo';
import Comments from './Comments'

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actionCreators from './../actionCreators';

class Single extends React.Component {

  render() {
    const { postId } = this.props.match.params;
    const { posts } = this.props || [];
    const { comments } = this.props || [];
    //find index
    const i = posts.findIndex((single) => single.code === postId);
    //find post
    const post = posts[i];
    //find comments
    const postComments = comments[postId] || [];

    return (
      <div className="single-photo">
        <Photo i={i} post={post} {...this.props} />
        <Comments postComments={postComments} {...this.props}/>
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
