import React, { Component } from "react";
import "./body.css";
import { Row, Col } from 'reactstrap';
import { Link } from 'react-router-dom'
import propertyForSale from "../images/property-for-sale.PNG";
import propertyForRent from "../images/property-for-rent.PNG";
import vehicals from "../images/vehicals.PNG";
import bikes from "../images/bikes.PNG";
import electronics from "../images/electronics.PNG";
import mobiles from "../images/mobiles.PNG";
import jobs from "../images/jobs.PNG";
import services from "../images/services.PNG";
import business from "../images/business.PNG";
import furniture from "../images/furniture.PNG";
class CategoryMenu extends Component {
    render() {
        return (
            <div>
                <Row className="row" >
                    
                    <Col md="3" sm="4" xs="6" className="icons-setting" >
                        <Link to="/" >
                            <div className="icons-div">
                                <img src={propertyForSale} alt="icon for property" />
                                <p>Property for Sala </p>
                            </div>
                        </Link>
                    </Col>
                    <Col md="3" sm="4" xs="6" className="icons-setting" >
                        <div className="icons-div">
                            <img src={propertyForRent} alt="icon for property" />
                            <p>Property for Rent </p>
                        </div>
                    </Col>
                    <Col md="3" sm="4" xs="6" className="icons-setting" >
                        <div className="icons-div">
                            <img src={vehicals} alt="icon for property" />
                            <p>Vehicals </p>
                        </div>
                    </Col>
                    <Col md="3" sm="4" xs="6" className="icons-setting" >
                        <div className="icons-div">
                            <img src={bikes} alt="icon for property" />
                            <p>Bikes</p>
                        </div>
                    </Col>
                    <Col md="3" sm="4" xs="6" className="icons-setting" >
                        <div className="icons-div">
                            <img src={electronics} alt="icon for property" />
                            <p>Electronics</p>
                        </div>
                    </Col>

                    
                    
                    <Col md="3" sm="4" xs="6" className="icons-setting" >
                        <Link to="/" >
                            <div className="icons-div">
                                <img src={mobiles} alt="icon for property" />
                                <p>Mobiles</p>
                            </div>
                        </Link>
                    </Col>
                    <Col md="3" sm="4" xs="6" className="icons-setting" >
                        <div className="icons-div">
                            <img src={jobs} alt="icon for property" />
                            <p>Jobs </p>
                        </div>
                    </Col>
                    <Col md="3" sm="4" xs="6" className="icons-setting" >
                        <div className="icons-div">
                            <img src={services} alt="icon for property" />
                            <p>Services </p>
                        </div>
                    </Col>
                    <Col md="3" sm="4" xs="6" className="icons-setting" >
                        <div className="icons-div">
                            <img src={business} alt="icon for property" />
                            <p>Business Industrial & Agriculture</p>
                        </div>
                    </Col>
                    <Col md="3" sm="4" xs="6" className="icons-setting" >
                        <div className="icons-div">
                            <img src={furniture} alt="icon for property" />
                            <p>Furniture & Home Decor</p>
                        </div>
                    </Col>
                    
                </Row>
            </div>
        )
    }
}
export default CategoryMenu;