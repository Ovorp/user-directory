import React, { Component } from 'react';
import FieldInput from './FieldInput';

export default class Form extends Component {
  constructor(props) {
    super(props);

    this.state = {
      firstName: '',
      lastName: '',
      city: '',
      country: '',
      title: '',
      employer: '',
      favoriteMovie: [],
    };
  }

  handleUpdateInfo = (val, fieldName) => {
    this.setState({
      [fieldName]: val,
    });
  };

  handleClearState = () => {
    this.setState({
      firstName: '',
      lastName: '',
      city: '',
      country: '',
      title: '',
      employer: '',
      favoriteMovie: [],
    });
  };

  render() {
    console.log(this.state, 'form');
    return (
      <div className="form">
        <form>
          <FieldInput
            cat="First Name"
            fieldName="firstName"
            handleUpdateInfo={this.handleUpdateInfo}
            value={this.state.firstName}
          />
          <FieldInput
            cat="Last Name"
            fieldName="lastName"
            handleUpdateInfo={this.handleUpdateInfo}
            value={this.state.lastName}
          />
          <FieldInput
            cat="City"
            fieldName="city"
            handleUpdateInfo={this.handleUpdateInfo}
            value={this.state.city}
          />
          <FieldInput
            cat="Country"
            fieldName="country"
            handleUpdateInfo={this.handleUpdateInfo}
            value={this.state.country}
          />
          <FieldInput
            cat="Job Title"
            fieldName="title"
            handleUpdateInfo={this.handleUpdateInfo}
            value={this.state.title}
          />
          <FieldInput
            cat="Employer"
            fieldName="employer"
            handleUpdateInfo={this.handleUpdateInfo}
            value={this.state.employer}
          />
          <FieldInput
            cat="Favorite Movies"
            fieldName="favoriteMovie"
            handleUpdateInfo={this.handleUpdateInfo}
            value={this.state.favoriteMovie}
            placeholder="i.e. The Hobbit, Pokemon 2000, Old Yeller"
          />

          <button
            onClick={(e) => {
              e.preventDefault();
              this.props.addNewPerson(this.state);
              this.handleClearState();
            }}
          >
            Submit
          </button>
        </form>
      </div>
    );
  }
}
