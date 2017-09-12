import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actionCreators from './../actionCreators';
import Photogrid from './Photogrid';

function mapStateToProps(state) {
  return {
    posts: state.posts,
    comments: state.comments
  }
}

function mapDispatchToProps(dispatch) {
  return  bindActionCreators(actionCreators, dispatch);
}

const AppConnect = connect(mapStateToProps, mapDispatchToProps)(Photogrid);

export default AppConnect;
