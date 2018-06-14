import React, { Component } from 'react';
import logo from './logo.svg';
import axios from 'axios';
import './App.css';

class App extends Component {
  constructor() {
    super();

    this.state = {
      people: [],
      name: '',
      age: '',
    };
  }

  getPeople() {
    // because we will be setting the state of people often i made a
    //function that will do just that below. that is why you see this
    // value in the .then instead of an arrow function
    axios.get('/api/people').then((this.setPersonWithResponse));
  }

  addPerson() {
    // this is just to make cleaner code and is not needed.
    const person = { name: this.state.name, age: this.state.age };

    // takes the person object we made above and posts that to the server
    axios.post('/api/people', person).then(this.setPersonWithResponse);
    //clears out the inputs after making a person
    this.setState({
      name: '',
      age: '',
    });
  }

  deletePerson(id) {
    axios.delete(`/api/people/${id}`).then(this.setPersonWithResponse);
  }

  // because we setState after each axios request it was redundant
  // to keep writing the same thing over and over, so I made this
  setPersonWithResponse = (response) => {
    this.setState({
      people: response.data,
    });
  }

  // This is a pattern you can use to have the same function handle
  // multiple inputs so you dont have to have one for each box.
  handleChange(property, value) {
    this.setState({
      // by putting [] around the property of the object it will look
      // at the value of property instead of the word property.
      [property]: value,
    });
  }

  render() {
    // this makes the array of jsx to show all the people we made.
    const people = this.state.people.map(person => (
      <li key={person.name} onClick={() => this.deletePerson(person.id)}>
        {person.name} is {person.age} old
      </li>
    ));
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <div className="top">
          {
            // get people button
          }
          <div className="column">
            <button
              onClick={() => {
                this.getPeople();
              }}
            >
              Get People
            </button>
          </div>
          {
            // add a person to the list of people
          }
          <div className="column form">
            <div>
              name<input
                type="text"
                value={this.state.name}
                {
                    //below we pass in 'name' as the property we want to
                    // update on state
                  }
                onChange={e => this.handleChange('name', e.target.value)}
              />
            </div>
            <div>
              age<input
                name="age"
                type="text"
                value={this.state.age}
                onChange={e => this.handleChange('age', e.target.value)}
              />
            </div>
            <button onClick={() => this.addPerson()}>Add Person</button>
          </div>
        </div>
        <div className="people">{people}</div>
      </div>
    );
  }
}

export default App;
