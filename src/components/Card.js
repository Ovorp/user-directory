import React, { Component } from 'react';
import data from './../data';
import List from './List';
import Button from './Button';

export default class Card extends Component {
  constructor(props) {
    super(props);

    this.state = {
      personNumber: 0,
      firstName: '',
      lastName: '',
      city: '',
      country: '',
      jobTitle: '',
      employer: '',
      favoriteMovies: [],
      idNumber: '',
    };
  }

  componentDidMount() {
    let { personNumber } = this.state;
    this.setState({
      firstName: data[personNumber].name.first,
      lastName: data[personNumber].name.last,
      city: data[personNumber].city,
      country: data[personNumber].country,
      jobTitle: data[personNumber].title,
      employer: data[personNumber].employer,
      favoriteMovies: data[personNumber].favoriteMovies,
      idNumber: data[personNumber].id,
    });
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.personNumber !== this.state.personNumber) {
      let { personNumber } = this.state;
      this.setState({
        firstName: data[personNumber].name.first,
        lastName: data[personNumber].name.last,
        city: data[personNumber].city,
        country: data[personNumber].country,
        jobTitle: data[personNumber].title,
        employer: data[personNumber].employer,
        favoriteMovies: data[personNumber].favoriteMovies,
        idNumber: data[personNumber].id,
      });
    }
  }

  handleAddOneToPersonNumber = () => {
    if (this.state.personNumber < data.length - 1) {
      this.setState({
        personNumber: this.state.personNumber + 1,
      });
    }
  };

  handleMinusOneToPersonNumber = () => {
    if (this.state.personNumber > 0) {
      this.setState({
        personNumber: this.state.personNumber - 1,
      });
    }
  };

  render() {
    console.log(this.state);
    const {
      firstName,
      lastName,
      city,
      country,
      jobTitle,
      employer,
      personNumber,
    } = this.state;
    return (
      <div>
        <div className="card">
          <h1>
            {firstName} {lastName}
          </h1>
          <p>
            From: {city}, {country}
          </p>
          <p>Job Title: {jobTitle}</p>
          <p>Employer: {employer}</p>
          <p>
            Favorite Movies:
            <List movies={this.state.favoriteMovies} />
          </p>
          <div className="position">
            {personNumber + 1}/{data.length}
          </div>
        </div>
        <footer>
          <Button name="< Previous" func={this.handleMinusOneToPersonNumber} />
          <Button name="Next >" func={this.handleAddOneToPersonNumber} />
        </footer>
      </div>
    );
  }
}
