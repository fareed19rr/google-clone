import React from 'react';
import { Link } from 'react-router-dom';
import { Avatar } from '@material-ui/core';
import AppsIcon from "@material-ui/icons/Apps";
import Search from '../components/Search';
import './HomeScreen.css';


function HomeScreen() {
    return (
        <div className='home'>
            <div className='home_header'>
                <div className='home_headerLeft'>
                    <Link to='/about'>About</Link>
                    <Link to='/store'>Store</Link>
                </div>

                <div className='home_headerRight'>
                    <Link to='/gmail'>Gmail</Link>
                    <Link to='/images'>Images</Link>
                    <AppsIcon />
                    <Avatar />
                </div>
            </div>

            <div className = 'home_body'>
                <img src="https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png" alt='logo' />
                <div className='home_inputContainer'>
                    <Search />
                </div>
            </div>
        </div>
    )
}

export default HomeScreen;
