import React from 'react';
import './NavBar.css';

import {Link} from 'react-router-dom';

import icon from './assets/icon.png';

export default function NavBar() {
    return (
        <nav class="navbar navbar-expand-lg ">
            <Link class="navbar-brand" id="title-navbar"><img src={icon} width="40px"/>SUSPYRE</Link>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="item-navbar" id="navbarNav">
                <ul class="navbar-nav">
                    <li class="item">
                        <Link to="/notices">Notices</Link>
                    </li>
                    <li class="item">
                        <Link to="/register">Registers</Link>
                    </li>
                    <li class="item">
                        <Link to="/list">Patients</Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
}