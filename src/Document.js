import React, { Component, Fragment } from "react";

export default class Document extends Component {
  render() {
    const DocMenu = this.props.children;
    return (
      <Fragment>
        { DocMenu }
        <section className="document">
          <div className="container">
            <div className="flex">
              <div className="ck12">
                <h3>Doküman</h3>
              </div>
            </div>
          </div>
        </section>
      </Fragment>
    );
  }
}
