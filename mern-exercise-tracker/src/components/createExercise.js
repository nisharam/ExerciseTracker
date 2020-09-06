import React, { Component } from "react";
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import axios from 'axios';
import { withStyles } from '@material-ui/core/styles';
import Select from '@material-ui/core/Select';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

const useStyles = (theme) => ({
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
      width: '25ch',
    },
  },
});

 class createExercise extends Component {
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
      axios.get('http://localhost:5000/users')
      .then(response =>{
        if(response.data.length >0){
          this.setState({
            users: response.data.map(user => user.username),
            username: response.data[0].username
          })
        }
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
    axios.post('http://localhost:5000/exercises/add', exercise)
    .then(res => console.log(res.data));

    window.location = "/"; //move back to home page.
  }

  render() {
    const {classes} = this.props;
    return (
      <div>
        <h1> Create new Exercise</h1>
        <form onSubmit={this.onSubmit}>
          <div className="formGroup">
            <label>Username :</label>
            <Select  required  value={this.state.username}
            onChange={this.onChangeUsername} native={true} >
              {/* taking all the usernames and showing in dropdown */}
              {this.state.users.map(function(user){
                return <option  value={user}>{user}</option>;
              })
              }
            </Select>
          </div>
          <div>
            <TextField id="standard-basic" label="enter description" value={this.state.description}
            onChange={this.onChangeDescription} />
          </div>
          <div>
            <TextField id="standard-basic" label="enter duration" value={this.state.duration}
            onChange={this.onChangeDuration} />
            {/* <label> duration:</label>
            <input type="text" required className="form-control" value={this.state.duration} 
            onChange={this.onChangeDuration} /> */}
          </div> 
          <div className="form-group">
            <div>
              <DatePicker selected={this.state.date} onChange={this.onChangeDate} />

            </div>
          </div>
          <Button variant="contained" color="primary" className="user-button" >Create Exercise log</Button>
        </form>
      </div>
    );
  }
}
export default withStyles(useStyles)(createExercise)
