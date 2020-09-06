import React , {Component} from 'react';
import { Link } from "react-router-dom";

export default class NavBar extends Component {
    render() {
        return (
            <div className="navBar">
                <ul>
                    <li> <Link to="/" >Exercise Tracker</Link></li>
                    <li><Link to="/">Exercises</Link></li>
                    <li><Link to="/create" > Create Exercise log</Link></li>
                    <li><Link to="/user"> User</Link></li>
                </ul>
            </div>
        )
    }
}