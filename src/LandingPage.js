import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router} from 'react-router-dom';
import Button from 'react-bootstrap/Button';
// import Jogging from './Jogging Animations/Animations/Jogging Colored.json';
// import Lottie from 'react-lottie';

class LandingPage extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			isLandingPage: true,
			isLoginPage: false,
		};
	}

	render() {

		// const defaultOptions = {
		// 	loop : true,
		// 	autoplay : true,
		// 	animationData : Jogging,
		// 	rendererSettings : {
		// 		preserveAspectRatio : 'xMidYMid slice'
		// 	}
		// };

		return (
            <Router>
			<div className="App-header">
				<img src={logo} className="App-logo" alt="logo" />
				{/* <Lottie options={defaultOptions} height={400} width={400} /> */}
				<h1> Informations wants to be free </h1>
				<div className="mb2">
					<Button href="/home" variant="outline-primary" size="lg" active>
						Home
					</Button>{' '}
                    <Button href="/login" variant="outline-light" size="lg">
						Login
					</Button>
				</div>
			</div>
            </Router>
		);
	}
}

export default LandingPage;
