import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Home from './Pages/Home/index';
import Register from './Pages/Register/index';
import Edit from './Pages/Edit/index';
import Show from './Pages/Show/index';
import Notices from './Pages/Notices/index'

export default function Routes(){
    return (
        <BrowserRouter>
        <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/register" component={Register} />
            <Route path="/update" component={Edit} />
            <Route path="/list" component={Show} />
            <Route path="/notices" component={Notices} />
        </Switch>
        </BrowserRouter>
    );
}