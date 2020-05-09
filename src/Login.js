import React from 'react';
import './LoginForm.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import FadeTransition from './fadeTransition.jsx';
import SignIn from './SignIn.js';
import SignUp from './SignUp.js';

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

export default Login;
