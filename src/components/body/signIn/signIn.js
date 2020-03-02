import React, { Component } from "react";
import "./signIn.css";
import {
    Card, Button, CardFooter,
    Form, FormGroup, Input,
    Label, Col, Row
} from 'reactstrap';
 class SignIn extends Component {
    render() {
        return (
            <div  >
                <div className="field-set" >
                    <p> Log In </p>
                    <div>
                        <Card>
                            <Form autoComplete='off' className="form-signIn" >
                                <Row>
                                    <Col>
                                        <FormGroup>
                                            <Label>
                                                Your Email
                                            </Label>
                                            <Input className="Input-Control" type="email" name="email" />
                                        </FormGroup>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col>
                                        <FormGroup>
                                            <Label>
                                                Password
                                            </Label>
                                            <Input className="Input-Control" type="password" name="email" />
                                        </FormGroup>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col>
                                        <FormGroup>
                                            <input type="checkbox" name="check" className="checkBox" defaultChecked="true" />
                                            <Label>
                                                Remember Me
                                            </Label>
                                        </FormGroup>
                                        <FormGroup className="submit-section">
                                            <div className="loginBtn" >
                                                <Button type="submit" color="primary" className="logInBtn" > Log in </Button>
                                            </div>
                                            <div className="signIn-failure-link" >
                                                <Row>
                                                    <Col md='6' >
                                                        <a className="terms-of-use"  style={{ color: "#007bff", margin: '0 0 0 40px' }} href="/"> Forgot Password </a>
                                                    </Col>
                                                    <Col md='6' >
                                                        <a className="terms-of-use"  style={{ color: "#007bff", margin: '0 0 0 40px' }} href="/"> New User?Register Here </a>
                                                    </Col>
                                                </Row>

                                            </div>
                                        </FormGroup>
                                    </Col>
                                </Row>


                            </Form>
                            <CardFooter className="terms-of-use" >
                                <p>
                                    Already Posted an Ad Before?
                                    <a href="/" > Manage your Ad through mobile Number</a>
                                </p>
                            </CardFooter>
                        </Card>
                        <Row>
                            <Col>
                                <p className="terms-of-use" > By loging In, You accept our <a href="https://www.olx.com.pk/terms/" target="_blank"  >Terms Of Use </a></p>
                            </Col>
                        </Row>
                    </div>
                </div>

            </div>
        )
    }
}
export default SignIn;