import React, { Component } from "react";
class Form extends Component {
	constructor(props) {
		super(props);
		this.state = {
			name: "",
			email: "",
			subject: "React",
		};
	}
	NameChangeHandler = (event) => {
		this.setState({
			name: event.target.value,
		});
	};

	EmailChangeHandler = (event) => {
		this.setState({
			email: event.target.value,
		});
	};
	onObtionSelect = (event) => {
		this.setState({
			subject: event.target.value,
		});
	};
	HandleSubmit = (event) => {
		alert(`${this.state.name} ${this.state.email} ${this.state.subject}`);
		event.preventDefault();
	};
	render() {
		return (
			<div>
				<form onSubmit={this.HandleSubmit}>
					<h1>Survey Form</h1>
					<label>Enter Name </label>

					<input
						type="text"
						value={this.state.name}
						onChange={this.NameChangeHandler}
					></input>
					<br></br>
					<label>Enter Email Id</label>
					<input
						type="email"
						value={this.state.email}
						onChange={this.EmailChangeHandler}
					></input>
					<br></br>
					<select value={this.state.subject} onChange={this.onObtionSelect}>
						<option value="React">React</option>
						<option value="Angular">Angular</option>
						<option value="Vue">Vue</option>
					</select>
					<button type="submit">Submit Survey</button>
				</form>
			</div>
		);
	}
}

export default Form;
