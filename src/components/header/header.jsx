import React, { Component } from "react";
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
} from 'reactstrap';
import {Link} from 'react-router-dom';
import olxImage from "../images/olx_logo.png";
import userImg from "../images/user-tie-solid.svg";
import "./header.css"
class Header extends Component {
    constructor() {
        super();
        this.toggle = this.toggle.bind(this);
        this.state = {
            isOpen: false
        };
    }
    toggle() {
        this.setState({
            isOpen: !this.state.isOpen
        });
    }
    render() {
        return (
            <div className = "header" >
                <Navbar className="CustomeNavbar" expand="md">
                    <NavbarBrand href="/"><img className="olx_logo" src={olxImage} alt="OLX" /> </NavbarBrand>
                    <span className="slogan" > Pakistan's Largest Market Place </span>
                    <NavbarToggler onClick={this.toggle} />
                    <Collapse isOpen={this.state.isOpen} navbar>
                        <Nav className="ml-auto" navbar>
                            <NavItem>
                                <Link to="/signIn">
                                    <div className="account" >
                                        <img src={userImg} alt="user-icon" className="user-icon" />
                                        <span className="link" ><strong>My Account</strong></span>
                                    </div>
                                </Link>
                            </NavItem>
                            <NavItem>
                                <div className="add" >
                                    <span>Submit An Add
                                    </span>
                                </div>
                            </NavItem>
                        </Nav>
                    </Collapse>
                </Navbar>
            </div>

        )
    }
}
export default Header