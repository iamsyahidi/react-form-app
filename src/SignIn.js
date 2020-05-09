import React from 'react'
import { Formik } from 'formik';
import { Form, Button } from 'react-bootstrap';
import * as yup from 'yup';
import './LoginForm.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router } from 'react-router-dom';
import axios from 'axios';
import InputForm from './InputForm.js';

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
								const url = 'http://localhost:3000/home';
								window.location.href = url;
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
													<InputForm
														controlId="validationFormikUsername"
														label="Username"
														type="text"
														placeholder="Username"
														name="username"
														value={values.username}
														onChange={handleChange}
														isInvalid={!!errors.username}
														error={errors.username}
													/>

													<InputForm
														controlId="validationFormikPassword"
														label="Password"
														type="password"
														placeholder="Password"
														name="password"
														value={values.password}
														onChange={handleChange}
														isInvalid={!!errors.password}
														error={errors.password}
													/>

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

export default SignIn;