import React, { Component, Fragment }     from "react";
import { BrowserRouter, Route, Switch }   from "react-router-dom";
import Header                             from "./Header";
import DocMenu                            from "./DocMenu";
import Home                               from "./Home";
import Features                           from "./Features";
import Document                           from "./Document";
import About                              from "./About";
import Theme                              from "./Theme";
import Love                               from "./Love";
import "./css/turkuaz.css";
import "./css/animate.css";
import "./css/App.css";

export default class App extends Component {
  openDocMenu(e) {
    const DocMenu = document.getElementById("js-mobil-menu");
  }
  render() {
    return (
      <BrowserRouter>
        <Fragment>
          <Header />
          <main>
            <Switch>
              <Route exact path="/"      render={()=>
                <Home>
                  <Features/>
                </Home>
              }/>
              <Route path="/dokuman"     render={()=>
                <Document>
                  <DocMenu />
                </Document>
              }/>
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
