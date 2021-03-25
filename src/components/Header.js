import React from 'react';
import '../styles/header.css'
import { Avatar } from '@material-ui/core';
import AccessTimeIcon from '@material-ui/icons/AccessTime';
import SearchIcon from '@material-ui/icons/Search';
import HelpOutlineIcon from '@material-ui/icons/HelpOutline';
import { useAuthValue } from '../Auth/AuthProvider';

function Header() {
    const [{user}] = useAuthValue();
    return (
        <div className="header" >
            <div className="header_left">
                {/* {avatar for logged in users} */}
                <Avatar className="header_avatar"
                    alt={user?.displayName}
                    src={user?.photoURL}
                />
                {/* {time Icon} */}
                <AccessTimeIcon />
            </div>
            <div className='header_search' >
                {/* {search icon} */}
                <SearchIcon />
                {/* {input} */}
                <input placeholder="SEARCH" />
            </div>
            <div className='header_right' >
                {/* {help icon} */}
                <HelpOutlineIcon />
            </div>
        </div>
    )
}

export default Header
