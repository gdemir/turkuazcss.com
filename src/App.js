import React, { Component, Fragment }     from "react";
import { BrowserRouter, Route, Switch }   from "react-router-dom";
import Header                             from "./Header";
import Home                               from "./Home";
import Features                           from "./Features";
import Document                           from "./Document";
import About                              from "./About";
import Theme                              from "./Theme";
import Love                               from "./Love";
import "./animate.css";
import "./App.css";

export default class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Fragment>
          <Header />
          <main>
            <Switch>
              <Route exact path="/" render={()=>
                <Home>
                  <Features/>
                </Home>
              }/>
              <Route path="/dokuman"     component={Document} />
              <Route path="/hakkinda"    component={About} />
              <Route path="/tema"        component={Theme} />
              <Route path="/ask"         component={Love} />
            </Switch>
          </main>
        </Fragment>
      </BrowserRouter>
    );
  }
}
