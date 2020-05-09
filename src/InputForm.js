import React from 'react';
import { Form, InputGroup } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

class InputForm extends React.Component {
	render() {
		return (
			<Form.Group className="form-group" controlId={this.props.controlId}>
				<Form.Label>{this.props.label}</Form.Label>
				<InputGroup className="input-group">
					<Form.Control 
					// {...this.props}
						type={this.props.type}
						placeholder={this.props.placeholder}
						aria-describedby="inputGroupPrepend"
						name={this.props.name}
						value={this.props.value}
						onChange={this.props.onChange}
						isInvalid={this.props.isInvalid}
						className="form-control"
					></Form.Control>
					<Form.Control.Feedback type="invalid">{this.props.error}</Form.Control.Feedback>
				</InputGroup>
			</Form.Group>
		);
	}
}

export default InputForm;
