import React from 'react'
import { BrowserRouter as Router, Link, Route } from 'react-router-dom'

import Home from './Home'
import About from './About';
import IndexCategory from './category/IndexCategory'

const Header = () => {
    return (
        <Router>

            <div>
                <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                    <a className="navbar-brand" href="#">Navbar</a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav mr-auto">
                            <li className="nav-item active">
                                <Link className="nav-link" to="/">Home</Link>
                            </li>

                            <li className="nav-item">
                                <Link className="nav-link" to="/category">Categories</Link>
                            </li>

                            <li className="nav-item">
                                <Link className="nav-link" to="/about">About</Link>
                            </li>

                    
                        </ul>
                    </div>
                </nav>



                <Route path="/" exact component={Home} />
                <Route path="/about" exact component={About} />
                <Route path="/category" exact component={IndexCategory} />
               
            </div>
            

            
        </Router>
    )
}

export default Header;

