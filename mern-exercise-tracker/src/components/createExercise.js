import React, { Component } from "react";
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css"


export default class createExercise extends Component {
  constructor(props) {
    super(props);
    this.onChangeUsername = this.onChangeUsername.bind(this);
    this.onChangeDescription = this.onChangeDescription.bind(this);
    this.onChangeDuration = this.onChangeDuration.bind(this);
    this.onChangeDate = this.onChangeDate.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.state = {
      username: "",
      description: "",
      duration: "",
      date: new Date(),
      users: [],
    };
  }

  componentDidMount(){
      //it is like ngonint.
      this.setState({
          users: ['test user'],
          username: 'test user'
      })


  }
  onChangeUsername(e) {
    this.setState({
      //value of textbox i.e is user and update the user name.
      username: e.target.value,
    });
  }
  onChangeDescription(e) {
    this.setState({
      description: e.target.value,
    });
  }
  onChangeDuration(e) {
    this.setState({
      duration: e.target.value,
    });
  }
  onChangeDate(date) {
    this.setState({
      date: date,
    });
    //to bind this here above we need to bind it to our class because if we don't do this ,
    // then we will get undefined this.
  }

  onSubmit(e) {
    e.preventDefault(); //prevent the default behavior of  html.

    const exercise = {
      username: this.state.username,
      description: this.state.description,
      duration: this.state.duration,
      date: this.state.date,
    };
    console.log(exercise);
    window.location = "/"; //move back to home page.
  }

  render() {
    return (
      <div>
        <h1> Create new Exercise</h1>
        <form onSubmit={this.onSubmit}>
          <div className="formGroup">
            <label>Username :</label>
            <select ref="userInput" required className="form-control" value={this.state.username}
            onChange={this.onChangeUsername} >
              {/* taking all the usernames and showing in dropdown */}
              {this.state.users.map(function(user){
                return <option key={user} value={user}>{user}</option>;
              })
              }
            </select>
          </div>
          <div>
            <label> Description:</label>
            <input type="text" required value={this.state.description}
            onChange={this.onChangeDescription} />
          </div>
          <div className="form-group">
            <label> duration:</label>
            <input type="text" required className="form-control" value={this.state.duration} 
            onChange={this.onChangeDuration} />
          </div> 
          <div className="form-group">
            <label> Date: </label>
            <div>
              <DatePicker selected={this.state.date} onChange={this.onChangeDate} />

            </div>
          </div>
          <input type="submit" value="create new Exercise" />
        </form>
      </div>
    );
  }
}
