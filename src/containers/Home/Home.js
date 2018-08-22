import Home from "../../components/Home";
import { connect } from "react-redux";
import { home } from "../../actions/home"

const mapActionCreators = {
  home
};

const mapStateToProps = state => ({
  posts: state.home
});

export default connect(mapStateToProps, mapActionCreators)(Home);