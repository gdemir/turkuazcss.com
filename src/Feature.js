import React, { Component } from "react";

export default class Feature extends Component {
  render() {
    const { id, classes, title, description, logo } = this.props;
    return (
      <figure id={ id } className={ classes }>
        <h5>{ title }</h5>
        <span dangerouslySetInnerHTML={{__html: description}}></span>
        <div dangerouslySetInnerHTML={{__html: logo}}></div>
      </figure>
    );
  }
}
