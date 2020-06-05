import React from 'react';
import { Formik } from 'formik';
import { Form } from 'react-bootstrap';
import * as yup from 'yup';
import './LoginForm.scss';
// import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import InputForm from './InputForm.js';

class SignUp extends React.Component {
	constructor(props) {
		super(props);
		this.state = {};
	}

	submitRegister(e) {}

	render() {
		const schema = yup.object({
			fullName: yup.string().required(),
			email: yup.string().required(),
			birthDate: yup.date().required(),
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
							alert('gagal regist');
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
												<InputForm
													controlId="validationFormikFullname"
													label="Full Name"
													type="text"
													placeholder="Full Name"
													name="fullName"
													value={values.fullName}
													onChange={handleChange}
													isInvalid={!!errors.fullName}
													error={errors.fullName}
												/>
												<InputForm
													controlId="validationFormikEmail"
													label="Email"
													type="email"
													placeholder="Email"
													name="email"
													value={values.email}
													onChange={handleChange}
													isInvalid={!!errors.email}
													error={errors.email}
												/>
												<InputForm
													controlId="validationFormikBirthdate"
													label="Birth Date"
													type="date"
													name="birthDate"
													value={values.birthDate}
													onChange={handleChange}
													isInvalid={!!errors.birthDate}
												/>
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

export default SignUp;