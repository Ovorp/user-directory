import React, { Component } from 'react';

export default class List extends Component {
  render() {
    return (
      <div>
        <ol>
          {this.props.movies.map((val) => {
            return <li key={val}>{val}</li>;
          })}
        </ol>
      </div>
    );
  }
}
