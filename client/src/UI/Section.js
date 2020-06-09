import React, { Component } from "react";
import "./UI.scss";

class Section extends Component {
  render() {
    return (
      <div
        className="section"
        style={{ textAlign: this.props.align ? this.props.align : "center" }}
      >
        {this.props.children}
      </div>
    );
  }
}

export default Section;