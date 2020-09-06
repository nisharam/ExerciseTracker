import React , {Component} from 'react';
import { Link } from "react-router-dom";
import "./navbar.css";

export default class NavBar extends Component {
    render() {
        return (
            <div className="navBar">
                <ul class="nav-list">
                    <li> <Link to="/" className="links">Exercise Tracker</Link></li>
                    <li><Link to="/" className="links">Exercises</Link></li>
                    <li><Link to="/create" className="links"> Create Exercise log</Link></li>
                    <li><Link to="/user" className="links"> User</Link></li>
                </ul>
            </div>
        )
    }
}