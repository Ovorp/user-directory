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

  render() {
    console.log(this.state);
    return (
      <div className="form">
        <form>
          <FieldInput
            cat="First Name"
            fieldName="firstName"
            handleUpdateInfo={this.handleUpdateInfo}
          />
          <FieldInput
            cat="Last Name"
            fieldName="lastName"
            handleUpdateInfo={this.handleUpdateInfo}
          />
          <FieldInput
            cat="City"
            fieldName="city"
            handleUpdateInfo={this.handleUpdateInfo}
          />
          <FieldInput
            cat="Country"
            fieldName="country"
            handleUpdateInfo={this.handleUpdateInfo}
          />
          <FieldInput
            cat="Job Title"
            fieldName="title"
            handleUpdateInfo={this.handleUpdateInfo}
          />
          <FieldInput
            cat="Employer"
            fieldName="employer"
            handleUpdateInfo={this.handleUpdateInfo}
          />
          <FieldInput
            cat="Favorite Movies"
            fieldName="favoriteMovie"
            handleUpdateInfo={this.handleUpdateInfo}
            placeholder="i.e. The Hobbit, Pokemon 2000, Old Yeller"
          />

          <button>Submit</button>
        </form>
      </div>
    );
  }
}
