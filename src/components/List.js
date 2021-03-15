import React, { Component } from 'react';

export default class List extends Component {
  render() {
    return (
      <div>
        <ol>
          {this.props.movies !== null
            ? this.props.movies.map((val) => {
                return <li key={val}>{val}</li>;
              })
            : null}
        </ol>
      </div>
    );
  }
}
