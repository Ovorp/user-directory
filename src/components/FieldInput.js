import React, { Component } from 'react';

export default class FieldInput extends Component {
  render() {
    return (
      <>
        <label>{this.props.cat}:</label>
        <input
          placeholder={this.props.placeholder}
          onChange={(e) => {
            this.props.handleUpdateInfo(e.target.value, this.props.fieldName);
          }}
        />
      </>
    );
  }
}
