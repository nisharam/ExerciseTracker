import React , { Component} from 'react';

export default class createUser extends Component{
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
    //make it again blank.
    this.setState({
        username: ''
    })
}

    render(){
        return (
            <div>
               <form onSubmit={this.onSubmit} >
                   <div>
                       <label> Username:</label>
                       <input type="text" required value={this.state.username} onChange={this.onChangeUsername} />
                   </div>
                   <div>
                       <input type="submit" value="create user" />
                   </div>


               </form>
            </div>
        )
    }
}