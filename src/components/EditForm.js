import React, { Component } from 'react';
import FieldInput from './FieldInput';
import './../css/form.css';

export default class EditForm extends Component {
  constructor(props) {
    super(props);

    const {
      firstName,
      lastName,
      city,
      country,
      jobTitle,
      employer,
      favoriteMovies,
    } = this.props.user;

    this.state = {
      firstName: firstName,
      lastName: lastName,
      city: city,
      country: country,
      title: jobTitle,
      employer: employer,
      favoriteMovies: favoriteMovies,
    };
  }

  componentDidUpdate = (prevProps) => {
    const {
      firstName,
      lastName,
      city,
      country,
      jobTitle,
      employer,
      favoriteMovies,
    } = this.props.user;
    if (prevProps !== this.props) {
      this.setState({
        firstName: firstName,
        lastName: lastName,
        city: city,
        country: country,
        title: jobTitle,
        employer: employer,
        favoriteMovies: favoriteMovies,
      });
    }
  };

  handleUpdateInfo = (val, fieldName) => {
    this.setState({
      [fieldName]: val,
    });
  };

  render() {
    return (
      <div className={this.props.classForm ? 'form' : 'form hide'}>
        <form>
          <FieldInput
            cat="Edit First Name"
            fieldName="firstName"
            handleUpdateInfo={this.handleUpdateInfo}
            value={this.state.firstName}
          />
          <FieldInput
            cat="Edit Last Name"
            fieldName="lastName"
            handleUpdateInfo={this.handleUpdateInfo}
            value={this.state.lastName}
          />
          <FieldInput
            cat="Edit City"
            fieldName="city"
            handleUpdateInfo={this.handleUpdateInfo}
            value={this.state.city}
          />
          <FieldInput
            cat="Edit Country"
            fieldName="country"
            handleUpdateInfo={this.handleUpdateInfo}
            value={this.state.country}
          />
          <FieldInput
            cat="Edit Job Title"
            fieldName="title"
            handleUpdateInfo={this.handleUpdateInfo}
            value={this.state.title}
          />
          <FieldInput
            cat="Edit Employer"
            fieldName="employer"
            handleUpdateInfo={this.handleUpdateInfo}
            value={this.state.employer}
          />
          <FieldInput
            cat="Edit Favorite Movies"
            fieldName="favoriteMovies"
            handleUpdateInfo={this.handleUpdateInfo}
            value={this.state.favoriteMovies}
          />

          <button
            onClick={(e) => {
              e.preventDefault();
              this.props.handleShowForm();
              this.props.handleEditUser(this.state);
            }}
          >
            Submit
          </button>
          <button
            onClick={(e) => {
              e.preventDefault();
              this.props.handleShowForm();
            }}
          >
            Cancel
          </button>
        </form>
      </div>
    );
  }
}
