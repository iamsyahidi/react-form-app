import React from 'react';
import logo from './logo.svg';
import './App.css';
import Button from 'react-bootstrap/Button';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Nav, Navbar } from 'react-bootstrap';
import LandingPage from './LandingPage.js';
import Login from './Login.js';
import Home from './Home.js'

function App() {
	return (
		<Router>
			<div className="App">
				<Navbar className="bg-dark" variant="dark">
					<Navbar.Brand href="/">
						<img src={logo} className="App-logo-nav" alt="nav-logo" />
					</Navbar.Brand>
					<Nav className="mr-auto">
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

export default App;
