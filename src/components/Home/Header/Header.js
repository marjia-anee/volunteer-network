import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../../images/logos/Group 1329.png';
import './Header.css';

const Header = () => {
    return (
        <div>
            <div className="header d-flex">
                <img src={logo} alt="" />
                <nav className="ml-auto px-5">
                    <Link to="/home">Home</Link>
                    <Link to="/donation">Donation</Link>
                    <Link to="/events">Events</Link>
                    <Link to="/blog">Blog</Link>


                    <button className = "btn btn-primary">Register</button>
                    <button className = "btn btn-dark">Admin</button>

                </nav>
            </div>
        </div>
    );
};

export default Header;