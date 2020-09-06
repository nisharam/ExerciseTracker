import React , { Component} from 'react';
import axios from 'axios';
import TextField from '@material-ui/core/TextField';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import "./user.css";

const useStyles = (theme) => ({
    root: {
      '& .MuiTextField-root': {
        margin: theme.spacing(1),
        width: '25ch',
      },
    },
  });
 class createUser extends Component{
    constructor(props){
        super(props);
        this.onChangeUsername = this.onChangeUsername.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        this.state ={
            username: ''
        }
    }
onChangeUsername(e){
    this.setState({
        username: e.target.value
    })
}
onSubmit(e){
    e.preventDefault();
    const user = {
        username: this.state.username
    }
    console.log(user);
    axios.post('http://localhost:5000/users/add',user)
    .then(res => console.log(res.data));


    //make it again blank.
    this.setState({
        username: ''
    })
}

    render(){
        const {classes} = this.props;
        return (
            <div class="user-form">
               <form onSubmit={this.onSubmit} className={classes.root} noValidate autoComplete="off">
                   <TextField id="outlined-basic" label="username" variant="outlined" required value={this.state.username} onChange={this.onChangeUsername}/>
                
                   <div>
                       {/* <input type="submit" value="create user" /> */}
                       <Button variant="contained" color="primary" className="user-button" >Create User</Button>
                   </div>


               </form>
            </div>
        )
    }
}
export default withStyles(useStyles)(createUser)