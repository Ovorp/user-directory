import React, { Component } from 'react';

export default class List extends Component {
  render() {
    return (
      <div>
        <ol>
          {this.props.movies.map((val, i) => {
            return <li key={(val, i)}>{val}</li>;
          })}
        </ol>
      </div>
    );
  }
}
