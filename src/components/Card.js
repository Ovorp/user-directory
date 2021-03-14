import React, { Component } from 'react';
import data from './../data';
import List from './List';
import Button from './Button';
import Form from './Form';

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
      form: {
        firstName: '',
        lastName: '',
        city: '',
        country: '',
        jobTitle: '',
        employer: '',
        favoriteMovies: [],
        idNumber: data.length + 1,
      },
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

  handleAddNewPerson = (val) => {
    data.push(val);
    console.log(data);
  };

  render() {
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
      <div className="content">
        {/* <button
          onClick={() => {
            this.handleAddNewPerson('test');
            console.log('test', data);
          }}
        >
          test
        </button> */}
        {/* <div className="card">
          <ul>
            {' '}
            <li>
              <h1 className="name">
                {firstName} {lastName}
              </h1>
            </li>
            <br />
            <li>
              <strong>From</strong>: {city}, {country}
            </li>
            <li>
              <strong>Job Title:</strong> {jobTitle}
            </li>
            <li>
              <strong>Employer:</strong> {employer}
            </li>
            <br />
            <li>
              <strong>Favorite Movies:</strong>
              <List movies={this.state.favoriteMovies} />
            </li>
          </ul>
          <div className="position">
            {personNumber + 1}/{data.length}
          </div>
        </div> */}
        <footer>
          <Button name="< Previous" func={this.handleMinusOneToPersonNumber} />
          <div className="changeData">
            <Button name="Edit" class="blue-button" />
            <Button name="Delete" class="blue-button" />
            <Button name="New" class="blue-button" />
          </div>
          <Button name="Next >" />
        </footer>
        <Form
          updateInfo={this.state.form}
          addNewPerson={this.handleAddNewPerson}
        />
      </div>
    );
  }
}
