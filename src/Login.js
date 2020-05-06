import React from 'react';
import { Formik } from 'formik';
import { Form, InputGroup } from 'react-bootstrap';
import * as yup from 'yup';
import './LoginForm.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import FadeTransition from './fadeTransition.jsx';

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

	submitLogin(e) {}

	render() {
		const schema = yup.object({
			username: yup.string().required(),
			password: yup.string().required(),
		});

		return (
			<Formik validationSchema={schema} onSubmit={console.log} initialValues={{}}>
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
															// onChange={handleChange}
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
															// onChange={handleChange}
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
													<button
														type="submit"
														onClick={this.submitLogin.bind(this)}
														className="btn btn-primary btn-block"
													>
														Login
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

class SignUp extends React.Component {
	constructor(props) {
		super(props);
		this.state = {};
	}

	submitRegister(e) {}

	render() {
		const schema = yup.object({
			firstname: yup.string().required(),
			username: yup.string().required(),
			password: yup.string().required(),
		});

		return (
			<Formik validationSchema={schema} onSubmit={console.log} initialValues={{}}>
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
											<h4 className="card-title mb-4 mt-1">Sign in</h4>
											<Form noValidate onSubmit={handleSubmit}>
												<Form.Group className="form-group" controlId="validationFormik01">
													<Form.Label>First Name</Form.Label>
													<InputGroup className="input-group">
														<Form.Control
															type="text"
															placeholder="First Name"
															aria-describedby="inputGroupPrepend"
															name="firstName"
															value={values.firstname}
															// onChange={handleChange}
															isInvalid={!!errors.username}
															className="form-control"
														></Form.Control>
														<Form.Control.Feedback type="invalid">
															{errors.firstname}
														</Form.Control.Feedback>
													</InputGroup>
												</Form.Group>

												<Form.Group className="form-group" controlId="validationFormikUsername">
													<Form.Label>Username</Form.Label>
													<InputGroup className="input-group">
														<Form.Control
															type="text"
															placeholder="Username"
															aria-describedby="inputGroupPrepend"
															name="username"
															value={values.username}
															// onChange={handleChange}
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
															// onChange={handleChange}
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
													<button
														type="submit"
														onClick={this.submitRegister.bind(this)}
														className="btn btn-primary btn-block"
													>
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
