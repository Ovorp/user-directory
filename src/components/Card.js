import React, { Component } from 'react';
import data from './../data';
import List from './List';
import Button from './Button';
import Form from './Form';
import EditForm from './EditForm';

export default class Card extends Component {
  constructor(props) {
    super(props);

    this.state = {
      personNumber: 0,
      firstName: data[0].name.first,
      lastName: data[0].name.last,
      city: data[0].city,
      country: data[0].country,
      jobTitle: data[0].title,
      employer: data[0].employer,
      favoriteMovies: data[0].favoriteMovies,
      idNumber: data[0].id,
      classForm: false,
      classEditForm: false,
    };
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

  handleEditUser = (val) => {
    const {
      firstName,
      lastName,
      city,
      country,
      title,
      employer,
      favoriteMovies,
    } = val;

    let movies = Array.isArray(favoriteMovies)
      ? favoriteMovies
      : favoriteMovies.split(',');
    data[this.state.personNumber] = {
      name: {
        first: firstName,
        last: lastName,
      },
      city: city,
      country: country,
      title: title,
      employer: employer,
      favoriteMovies: movies,
    };

    this.setState({
      firstName: data[this.state.personNumber].name.first,
      lastName: data[this.state.personNumber].name.last,
      city: data[this.state.personNumber].city,
      country: data[this.state.personNumber].country,
      jobTitle: data[this.state.personNumber].title,
      employer: data[this.state.personNumber].employer,
      favoriteMovies: data[this.state.personNumber].favoriteMovies,
    });
  };

  handleMinusOneToPersonNumber = () => {
    if (this.state.personNumber > 0) {
      this.setState({
        personNumber: this.state.personNumber - 1,
      });
    }
  };

  handleAddNewPerson = (val) => {
    const {
      firstName,
      lastName,
      city,
      country,
      title,
      employer,
      favoriteMovies,
    } = val;

    let movies = favoriteMovies.split(',');
    let newEntry = {
      name: {
        first: firstName,
        last: lastName,
      },
      city: city,
      country: country,
      title: title,
      employer: employer,
      favoriteMovies: movies,
    };
    data.push(newEntry);
  };

  handleDeleteUser = () => {
    data.splice(this.state.personNumber, 1);

    alert(`This User was deleted`);
    if (this.state.personNumber === data.length) {
      let newNum = this.state.personNumber - 1;
      this.setState({
        personNumber: newNum,
        firstName: data[newNum].name.first,
        lastName: data[newNum].name.last,
        city: data[newNum].city,
        country: data[newNum].country,
        jobTitle: data[newNum].title,
        employer: data[newNum].employer,
        favoriteMovies: data[newNum].favoriteMovies,
      });
    } else {
      this.setState({
        firstName: data[this.state.personNumber].name.first,
        lastName: data[this.state.personNumber].name.last,
        city: data[this.state.personNumber].city,
        country: data[this.state.personNumber].country,
        jobTitle: data[this.state.personNumber].title,
        employer: data[this.state.personNumber].employer,
        favoriteMovies: data[this.state.personNumber].favoriteMovies,
      });
    }
  };

  handleShowForm = () => {
    this.setState({
      classForm: !this.state.classForm,
    });
  };

  handleShowEditForm = () => {
    this.setState({
      classEditForm: !this.state.classEditForm,
    });
  };

  render() {
    console.log(this.state.personNumber, data.length);
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
        <div className="card">
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
        </div>
        <footer>
          <Button name="< Previous" func={this.handleMinusOneToPersonNumber} />
          <div className="changeData">
            <Button
              name="Edit"
              class="blue-button"
              func={this.handleShowEditForm}
            />
            <Button
              name="Delete"
              class="blue-button"
              func={this.handleDeleteUser}
            />
            <Button name="New" class="blue-button" func={this.handleShowForm} />
          </div>
          <Button name="Next >" func={this.handleAddOneToPersonNumber} />
        </footer>
        <Form
          addNewPerson={this.handleAddNewPerson}
          classForm={this.state.classForm}
          handleShowForm={this.handleShowForm}
        />
        <EditForm
          classForm={this.state.classEditForm}
          handleShowForm={this.handleShowEditForm}
          user={this.state}
          handleEditUser={this.handleEditUser}
        />
      </div>
    );
  }
}
