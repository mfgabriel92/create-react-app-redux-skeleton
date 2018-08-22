import React, { Component } from "react";
import Home from "../containers/Home"
import { BrowserRouter, Route } from "react-router-dom";
import { Switch } from "react-router";
import { connectedRouterRedirect } from "redux-auth-wrapper/history4/redirect";

class AppContainer extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route path="/" component={Home}/>
        </Switch>
      </BrowserRouter>
    )
  }
}

export default AppContainer;