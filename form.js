class NameForm extends React.Component {

	constructor(props){
		super(props);

		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
		this.state = {value: ''};
	}

	handleChange(event) {
		this.setState({ value: event.target.value});
	}


	handleSubmit(event) {

		alert('Hi, ' + this.state.value);
		event.preventDefault();

	}

	render() {
		return(
			<form onSubmit={this.handleSubmit}>
			<label> Name  </label>
				<input type="text" value={this.state.value} onChange={this.handleChange}/>
				<button type="submit">Submit</button>
				</form>
		);
	}
}
