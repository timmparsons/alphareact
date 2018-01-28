import React, {Component} from 'react';
import {
    Route,
    NavLink,
    HashRouter
} from "react-router-dom";
import Home from "./Home";
import About from "./AboutUs";
import Services from "./Services";
import Reviews from "./Reviews";
import Contact from "./Contact";

class Main extends React.Component {
    render() {
        return (
            <HashRouter>
                <div className="row">
                    <div className="col-md-6">
                        <h4>Alpha Tax Consulting &amp; Tax, Inc.</h4>
                    </div>
                    <div className="col-md-6">
                        <ul className="header">
                            <li><NavLink exact to="/">Home</NavLink></li>
                            <li><NavLink to="/AboutUs">About Us</NavLink></li>
                            <li><NavLink to="/Services">Services</NavLink></li>
                            <li><NavLink to="/Reviews">Reviews</NavLink></li>
                            <li><NavLink to="/Contact">Contact Us</NavLink></li>
                        </ul>
                    </div>               
                    <div className="content">
                        <Route exact path="/" component={Home} />
                        <Route path="/AboutUs" component={About} />
                        <Route path ="/Services" component={Services} />
                        <Route path="/Reviews" component={Reviews} />
                        <Route path="/Contact" component={Contact} />
                    </div>        
                        
                </div>
            </HashRouter>
        );
    }
}

export default Main;