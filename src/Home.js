import React, { useState } from 'react';
import { Button, ListGroup, Tab, Modal } from 'react-bootstrap';
import welcome from './Welcome BW/welcome bw.svg';
import logo from './logo.svg';
// import 'bootstrap/dist/css/bootstrap.min.css';
import './Home.css';
import Profile from './Profile.js';
import DataRow from './DataRow.js';
import axios from 'axios';
import SignUp from './SignUp.js';
import Footer from './Footer.js';

function Home() {
	const [modalShow, setModalShow] = React.useState(true);
	const [modalRegist, setModalRegist] = React.useState(false);
	const [idUser, setIduser] = useState(0);

	const [state, setState] = useState({
		data: [],
		columns: [],
	});

	const handleGetAll = () => {
		axios({
			method: 'get',
			url: 'http://localhost:8080/api/login/get/all',
		})
			.then(function (response) {
				// console.log('ini data', response.data);
				// alert('berhasil get');
				// const dataRows = [];
				const data = response.data;
				const columns = [
					{
						name: 'No',
						selector: 'idBio',
						sortable: true,
					},
					{
						name: 'Full Name',
						selector: 'fullName',
						sortable: true,
					},
					{
						name: 'Birth Date',
						selector: 'birthDate',
						sortable: true,
					},
					{
						name: 'Email',
						selector: 'email',
						sortable: true,
					},
					{
						name: 'Bio',
						selector: 'bio',
						sortable: true,
					},
					{
						name: 'Action',
						selector : function (response){
							console.log(response);
							return <button type="button" className="btn btn-danger" onClick={()=>setIduser(response.idUser)} onDoubleClick={handleDelete} >Delete</button>;
						},
						// selector: function (row) {
						// 	return <button className="btn btn-danger" onClick={handleDelete.bind(meta.row)} >Delete</button>;
						// },
					},
				];
				// const dataRow = <DataRow data={data} columns={columns} />;
				// dataRows.push(dataRow);
				setState({ ...state, data: data, columns: columns });
			})
			.catch(function (error) {
				console.log(error);
				// alert('gagal get');
			});
	};

	const handleClick = (response) => {
		setIduser(response.idUser + idUser);
		console.log(idUser);
	}

	const handleDelete = () =>{
		console.log(idUser);
		axios({
			method: 'delete',
			url: 'http://localhost:8080/api/login/delete/' + (idUser),
		})
			.then(function (response) {
				console.log('ini data', response.data);
				alert('berhasil delete');
			})
			.catch(function (error) {
				console.log(error);
				alert('gagal delete');
			});
	}

	const handleRegist = () => {
		handleGetAll();		
	};

	return (
		<>
			<MyVerticallyCenteredModal show={modalShow} onHide={() => setModalShow(false)} />
			<RegistModal show={modalRegist} onHide={()=> setModalRegist(false)} />
			<br/>
			<div className="container">
				<div className="flex-row">
					<div className="card">
						<div className="card-header">
							<button type="button" onClick={handleGetAll} className="float-right btn btn-primary">
								Registrasi
							</button>
						</div>
						<div className="card-body">
							<DataRow data={state.data} columns={state.columns} />
						</div>
					</div>
				</div>

				<div className="row profile">
					<div className="col-md-3">
						<div className="profile-sidebar">
							{/* SIDEBAR USERPIC */}
							<div className="profile-userpic">
								<img src={logo} className="img-responsive" alt=""></img>
							</div>
							{/* SIDEBAR USERTITLE */}
							<div className="profile-usertitle">
								<div className="profile-usertitle-name">Username</div>
								<div className="profile-usertitle-job">bio</div>
							</div>
							{/* <!-- END SIDEBAR USER TITLE --> */}
							{/* <!-- SIDEBAR BUTTONS --> */}
							<div className="profile-userbuttons">
								<button type="button" className="btn btn-success btn-sm">
									Do something
								</button>
							</div>
							{/* <!-- END SIDEBAR BUTTONS --> */}
							{/* <!-- SIDEBAR MENU --> */}
							<div className="profile-usermenu">
								<Tab.Container id="list-group-tabs-example" defaultActiveKey="#link1">
									<ListGroup>
										<ListGroup.Item action href="#link1">
											Overview
										</ListGroup.Item>
										<ListGroup.Item action href="#link2">
											Settings
										</ListGroup.Item>
									</ListGroup>
								</Tab.Container>
							</div>
							{/* <!-- END MENU --> */}
						</div>
					</div>

					<div className="col-md-9">
						<div className="profile-content">
							<Profile />
						</div>
					</div>
				</div>
			</div>
			<Footer />
		</>
	);
}

function MyVerticallyCenteredModal(props) {
	return (
		<Modal {...props} size="lg" aria-labelledby="contained-modal-title-vcenter" centered>
			<Modal.Body>
				<div className="App-header">
					<img src={welcome} className="Home-logo" alt="logo" />
					{/* <Lottie options={defaultOptions} height={400} width={400} /> */}
					<h1> Welcome !!! </h1>
					<Button onClick={props.onHide}>Get Started</Button>
				</div>
			</Modal.Body>
		</Modal>
	);
}

function RegistModal(props) {
	return (
		<Modal {...props} size="lg" aria-labelledby="contained-modal-title-vcenter" centered>
			<Modal.Body>
				{/* <div className="App-header"> */}
					<SignUp/>
				{/* </div> */}
			</Modal.Body>
			<Modal.Footer>
				<Button onClick={props.onHide}>Close</Button>
			</Modal.Footer>
		</Modal>
	);
}

export default Home;
