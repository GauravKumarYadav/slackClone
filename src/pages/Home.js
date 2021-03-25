import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import Header from '../components/Header';
import Sidebar from '../components/Sidebar';
import Chat from '../components/Chat';

import '../styles/home.css';

function Home() {
    return (
        <div>
            <Header />
            <div className="app_body" >
                {/* sidebar */}
                <Sidebar />
                {/* react Router -> chat screen */}
                <Switch>
                    <Route path="/room/:roomId" >
                        <Chat />
                    </Route>
                    <Route path="/">
                        <h2>Welcome</h2>
                    </Route>
                </Switch>
            </div>
        </div>
    )
}

export default Home
