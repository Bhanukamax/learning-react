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
			<form className="form-inline" onSubmit={this.handleSubmit}>
				<div className="form-group" >
					<label htmlFor="name"> Name  </label>
					<input id="name"  className="form-control" type="text" value={this.state.value} onChange={this.handleChange}/>
				</div>
					<button className="btn btn-success" type="submit">Submit</button>
				</form>
		);
	}
}


class FlavorForm extends React.Component {
	constructor(props) {
		super(props);
		this.state = {value: this.props.items[3]}
		
		this.handleChange = this.handleChange.bind(this);
		this.handleSbumit = this.handleSbumit.bind(this);
	}


	handleChange(event) {
		console.log(event.target.value);
		this.setState({value: event.target.value});
	}

	handleSbumit(event) {
		console.log("Your Flovor is " + this.state.value);
		event.preventDefault();
	}

	render() {
		return(
			<form onSubmit={this.handleSbumit}>
				<div className="form-group">
				<label htmlFor="flavor">Select Your Flavor</label>
					<select onChange={this.handleChange} id="flavor" className="form-control" value={this.state.value}>
						{
							this.props.items.map((item)=> {
								return(
									<option key={item} value={item}> {item} </option>
								);

							})
						
						}


					</select>
				
				<button type="submit" className="btn btn-success">Submit</button>
				</div>
			</form>
		);


	}

}
