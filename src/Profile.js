import React from 'react';
// import 'bootstrap/dist/css/bootstrap.min.css';
import logo from './logo.svg';

export default function Profile() {

	return (
		<div className="card-body">
			<div className="row">
				<form className="col-md-6 text-left">
					<div className="form-group">
						<label className="font-weight-bold">Full Name</label>
						<input
							placeholder="Full Name"
							className="form-control"
							name="fullName"
							id="fullName"
							type="text"
						></input>
					</div>

					<div className="form-group">
						<label className="font-weight-bold">Email Address</label>
						<input
							placeholder="Email Address"
							className="form-control"
							name="email"
							id="email"
							type="email"
						></input>
					</div>

                    <div className="form-group">
						<label className="font-weight-bold">Birth Date</label>
						<input
							className="form-control"
							name="birthDate"
							id="birthDate"
							type="date"
						></input>
					</div>

					<div className="form-group">
						<label className="font-weight-bold">Bio</label>
						<textarea
							placeholder="Bio"
							className="form-control"
							name="bio"
							id="bio"
							type="textarea"
						></textarea>
					</div>

					<div className="form-group">
						<button type="submit" className="btn btn-success">
							Update Profile
						</button>
					</div>
				</form>
				<div className="col-md-4">
					<div className="form-group">
						<label className="font-weight-bold">Profile Picture</label>
						<img src={logo} className="figure-img" name="profilePicture" id="profilePicture" alt=""></img>
						<button className="btn btn-dark">edit photo</button>
					</div>
				</div>
			</div>
		</div>
	);
}
