import { Component } from 'react';
import './Navbar.css';
import { MenuItems } from './MenuItems';
import { Link } from "react-router-dom";

class Navbar extends Component { //new react component named Navbar extending Component class provided by React
    state = {clicked: false};
    handleClick=()=> {
        this.setState({ clicked: !this.state.clicked })
    }
    render() { // like javafx's start(). Shows interface to user. Only used for components extending react's component class
        return( // defined what component should be displayed on the screen. This method returns JSX which is converted by React into HTML
            <nav className= "NavbarItems">
                <h1 className= "NavbarLogo">Nitya Potti</h1>
                <div className= "menu-icons" onClick= {this.handleClick}>
                    <i className={this.state.clicked ? "fas fa-times" : "fas fa-bars"} ></i>
                </div>
                    <ul className= {this.state.clicked ? "nav-menu active" : "Navbar-menu"}>
                        {MenuItems.map((item) => { 
                            return(
                                <li>
                                    <Link className={item.cName} to={item.url}>
                                        <i className = {item.icon}></i>
                                        {item.title}
                                    </Link>
                                </li>
                                
                            );
                        })}
                       
                    </ul>
            </nav>
            
        )
    }
}
export default Navbar //allow other pages to import this navbar