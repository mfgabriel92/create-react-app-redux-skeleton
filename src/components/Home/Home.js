import React, { Component } from "react";

class Home extends Component {
  constructor() {
    super();

    this.state = {
      posts: [],
      isLoading: false
    }
  }

  componentWillMount() {
    const { home } = this.props;
    home();
  }

  componentWillReceiveProps(nextProps) {
    const { posts: { getting, getSuccess, data } } = nextProps;

    if (getting && !getSuccess) {
      this.setState({ isLoading: true });
    }

    if (!getting && getSuccess) {
      this.setState({ isLoading: false });
    }

    if (data) {
      this.setState({ posts: data });
    }
  }

  renderList = () => {
    const { posts, isLoading } = this.state;

    if (!posts && isLoading) {
      return "Loading..."
    }

    if (!posts && !isLoading) {
      return "No data."
    }

    return (
      posts.map(post => {
        return (
          <div>
            <h5>{post.title}</h5>
            <p>{post.body}</p>
          </div>
        )
      })
    )
  };

  render() {
    return (
      <div className="container">
        <h1>Homepage</h1>
        {this.renderList()}
      </div>
    )
  }
}

export default Home;