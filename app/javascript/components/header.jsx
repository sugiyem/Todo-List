import React from 'react';

function Header(props) {
    const list = props.log_in 
        ? (
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                <li class="nav-item">
                    Show Tasks
                </li>
                <li class="nav-item">
                    Sign Out
                </li>
                <li class="nav-item">
                    Edit Profile
                </li>
            </ul>
        )
        : (
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                <li class="nav-item">
                    Sign Up
                </li>
                <li class="nav-item">
                    Sign In
                </li>
            </ul>
        );
    return (
        <nav class="navbar navbar-expand-lg navbar-light bg-primary">
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
            {list}
            </div>
        </nav>
    );
}

export default Header;
