import React from 'react';
import { Formik } from 'formik';
import { Form, InputGroup, Button } from 'react-bootstrap';
import * as yup from 'yup';
import './LoginForm.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import FadeTransition from './fadeTransition.jsx';
import { BrowserRouter as Router } from 'react-router-dom';
import axios from 'axios';

class Login extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			isSignInOpen: true,
			isSignUpOpen: false,
		};
	}

	showSignUpBox() {
		this.setState({
			isSignInOpen: false,
			isSignUpOpen: true,
		});
	}

	showSignInBox() {
		this.setState({
			isSignInOpen: true,
			isSignUpOpen: false,
		});
	}

	render() {
		return (
			<div>
				<FadeTransition isOpen={this.state.isSignInOpen} duration={500}>
					<SignIn onClick={this.showSignUpBox.bind(this)} />
				</FadeTransition>
				<FadeTransition isOpen={this.state.isSignUpOpen} duration={500}>
					<SignUp onClick={this.showSignInBox.bind(this)} />
				</FadeTransition>
			</div>
		);
	}
}

class SignIn extends React.Component {
	constructor(props) {
		super(props);
		this.state = {};
	}

	myFunction() {
		
	}

	render() {
		const schema = yup.object({
			username: yup.string().required(),
			password: yup.string().required(),
		});

		return (
			<Router>
				<Formik
					validationSchema={schema}
					onSubmit={(values, { setSubmitting }) => {
						
						axios({
							method: 'post',
							url: 'http://localhost:8080/api/login',
							data: values,
						})
							.then(function (response) {
								console.log(response);
								alert('berhasil login');
								// history.go("/home");
							})
							.catch(function (error) {
								console.log(error);
								alert('gagal login');
							});
							
					}}
					initialValues={{}}
				>
					{({ handleSubmit, handleChange, handleBlur, values, touched, isValid, errors }) => (
						<div className="Login-container">
							<div className="container">
								<div className="d-flex justify-content-center">
									<aside className="col-sm-4">
										<div className="card">
											<article className="card-body text-left">
												<button
													href="#"
													onClick={this.props.onClick}
													className="float-right btn btn-outline-primary"
												>
													Sign up
												</button>
												<h4 className="card-title mb-4 mt-1">Sign in</h4>
												<Form noValidate onSubmit={handleSubmit} id="form-signIn">
													<Form.Group
														className="form-group"
														controlId="validationFormikUsername"
													>
														<Form.Label>Username</Form.Label>
														<InputGroup className="input-group">
															<Form.Control
																type="text"
																placeholder="Username"
																aria-describedby="inputGroupPrepend"
																name="username"
																value={values.username}
																onChange={handleChange}
																isInvalid={!!errors.username}
																className="form-control"
															></Form.Control>
															<Form.Control.Feedback type="invalid">
																{errors.username}
															</Form.Control.Feedback>
														</InputGroup>
													</Form.Group>

													<Form.Group
														className="form-group"
														controlId="validationFormikPassword"
													>
														<Form.Label>Password</Form.Label>
														<InputGroup className="input-group">
															<Form.Control
																type="password"
																placeholder="Password"
																aria-describedby="inputGroupPrepend"
																name="password"
																value={values.password}
																onChange={handleChange}
																isInvalid={!!errors.password}
																className="form-control"
															></Form.Control>
															<Form.Control.Feedback type="invalid">
																{errors.password}
															</Form.Control.Feedback>
														</InputGroup>
													</Form.Group>

													<Form.Group>
														<Form.Check label="Save password" />
													</Form.Group>
													<div className="form-group">
														<Button
															type="submit"
															className="btn btn-primary btn-block"
															// href="/home"
														>
															Login
														</Button>
													</div>
												</Form>
											</article>
										</div>
									</aside>
								</div>
							</div>
						</div>
					)}
				</Formik>
			</Router>
		);
	}
}

class SignUp extends React.Component {
	constructor(props) {
		super(props);
		this.state = {};
	}

	submitRegister(e) {}

	render() {
		const schema = yup.object({
			username: yup.string().required(),
			password: yup.string().required(),
		});

		return (
			<Formik
				validationSchema={schema}
				onSubmit={(values, { setSubmitting }) => {
					axios({
						method: 'post',
						url: 'http://localhost:8080/api/login/regis',
						data: values,
					})
						.then(function (response) {
							console.log(response);
							alert('berhasil regist');
						})
						.catch(function (error) {
							console.log(error);
						});
				}}
				initialValues={{}}
			>
				{({ handleSubmit, handleChange, handleBlur, values, touched, isValid, errors }) => (
					<div className="Login-container">
						<div className="container">
							<div className="d-flex justify-content-center">
								<aside className="col-sm-4">
									<div className="card">
										<article className="card-body text-left">
											<button
												href="#"
												onClick={this.props.onClick}
												className="float-right btn btn-outline-primary"
											>
												Sign In
											</button>
											<h4 className="card-title mb-4 mt-1">Sign up</h4>
											<Form noValidate onSubmit={handleSubmit}>
												<Form.Group className="form-group" controlId="validationFormikUsername">
													<Form.Label>Username</Form.Label>
													<InputGroup className="input-group">
														<Form.Control
															type="text"
															placeholder="Username"
															aria-describedby="inputGroupPrepend"
															name="username"
															value={values.username}
															onChange={handleChange}
															isInvalid={!!errors.username}
															className="form-control"
														></Form.Control>
														<Form.Control.Feedback type="invalid">
															{errors.username}
														</Form.Control.Feedback>
													</InputGroup>
												</Form.Group>

												<Form.Group className="form-group" controlId="validationFormikPassword">
													<Form.Label>Password</Form.Label>
													<InputGroup className="input-group">
														<Form.Control
															type="password"
															placeholder="Password"
															aria-describedby="inputGroupPrepend"
															name="password"
															value={values.password}
															onChange={handleChange}
															isInvalid={!!errors.password}
															className="form-control"
														></Form.Control>
														<Form.Control.Feedback type="invalid">
															{errors.password}
														</Form.Control.Feedback>
													</InputGroup>
												</Form.Group>

												<Form.Group>
													<Form.Check label="Save password" />
												</Form.Group>
												<div className="form-group">
													<button type="submit" className="btn btn-primary btn-block">
														Register
													</button>
												</div>
											</Form>
										</article>
									</div>
								</aside>
							</div>
						</div>
					</div>
				)}
			</Formik>
		);
	}
}

export default Login;
