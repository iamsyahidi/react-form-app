import React from 'react';
import logo from './logo.svg';
import './App.css';
import Button from 'react-bootstrap/Button';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Nav, Navbar } from 'react-bootstrap';
import LandingPage from './LandingPage.js';
import Login from './Login.js';
import Home from './Home.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import './LoginForm.scss';


class App extends React.Component {
	// constructor(props){
	// 	super(props);
	// 	this.state = {
	// 		isLandingPageOpen : true,
	// 		isHomePageOpen : false,
	// 		isLoginPageopen : false
	// 	}
	// }

	// handleClick(menuBar){
	// 	this.setState({
	// 		active: menuBar
	// 	});
	// };

	render() {
		// const activeStyle = { color : '#70a1ff' };

		return (
			<Router>
				<div className="App">
					<Navbar className="bg-dark" variant="dark">
						<Navbar.Brand href="/">
							<img src={logo} className="App-logo-nav" alt="nav-logo" />
						</Navbar.Brand>
						<Nav className="mr-auto">
							{/* {menuBars.map(menuBar => <Nav.Link 
						href="/home"
						style={this.state.active === menuBar ? activeStyle : {}}
						onClick={this.handleClick.bind(this, menuBar)} 
						>
							{menuBar}
							</Nav.Link>)} */}
							<Nav.Link href="/home">Home</Nav.Link>
						</Nav>
						<Button href="/login" variant="outline-light" type="button">
							Login
						</Button>
					</Navbar>
					<Switch>
						<Route exact path="/" component={LandingPage}></Route>
						<Route exact path="/login" component={Login}></Route>
						<Route exact path="/home" component={Home}></Route>
					</Switch>
				</div>
			</Router>
		);
	}
}

export default App;
