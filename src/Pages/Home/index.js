import React from 'react';
import './Home.css';

import NavBar from '../../Components/NavBar/index'

export default function Home() {
    return (
        <>
            <NavBar />
            <div className="content-Home-Page">
                <div id="bg" className="row">
                    <div class="jumbotron">
                        <h1 class="display-4">Hello, world!</h1>
                        <p class="lead">SUSPYRE is a free patient management tool, in order to optimize your time and help your organization.</p>
                        <hr class="my-4" />
                            <p>Start right now to take your business into the future!</p>
                        </div>
                    </div>
                </div>
        </>
    );
}