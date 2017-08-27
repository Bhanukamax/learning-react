function BoilingVerdict(props) {

	if(props.celsius >= 100) {
		return <p>The water would boil</p>
	}
	return <p>The water would not boil</p>

}


const scaleName = {
	c: 'Celsius',
	f: 'Fahrenheit'
}


class Calculator extends React.Component {
	constructor(props) {
		super(props);
		this.handleCelsiusChange = this.handleCelsiusChange.bind(this);
		this.handleFahrenheitChange = this.handleFahrenheitChange.bind(this);
		this.state = { temprature: '', scale: 'c'};
	}

	handleCelsiusChange(temprature) {
		this.setState({ scale: 'c', temprature});
	}

	handleFahrenheitChange(temprature) {
		this.setState({ scale: 'f', temprature});
	}


	render() {
		const scale = this.state.scale;
		const temprature = this.state.temprature;
		const celsius = scale == 'f' ? tryConvert(temprature, toCelsius) : temprature;
		const fahrenheit = scale == 'c' ? tryConvert(temprature, toFahrenheit) : temprature;

		return(
			<div>
				<TempratureInput 
					scale="c"
					temprature={celsius}
					onTempratureChange={this.handleCelsiusChange} />
				<TempratureInput 
					scale="f"
					temprature={fahrenheit}
					onTempratureChange={this.handleFahrenheitChange} />
				<BoilingVerdict celsius={parseFloat(celsius)}/>
			</div>
		);
	}
}




// convertiosn functions
function toCelsius(fahrenheit) {
	return (fahrenheit - 32) * 5 / 9;
}
function toFahrenheit(celsius) {
	return (celsius * 9 / 5) + 32;
}


function tryConvert(temprature, convert) {
	const input = parseFloat(temprature);
	if(Number.isNaN(input)) {
		return '';
	}
	const output = convert(input);
	const rounded = Math.round(output * 1000) / 1000;
	return rounded.toString();
}


class TempratureInput extends React.Component {
	constructor(props) {
		super(props);

		this.handleChange = this.handleChange.bind(this);
	}

	handleChange(e) {
		//this.setState({temprature: e.target.value});
		this.props.onTempratureChange(e.target.value);

	}

	render() {
		const temprature = this.props.temprature;
		const scale = this.props.scale;
		return(
			<fieldset>
				<legend>Enter Temprature in {scaleName[scale]}</legend>
				<input
					type="number"
					value={temprature}	
					onChange={this.handleChange} />
			</fieldset>
		);
	}

}



function FancyBorder(props) {
	return(
		<div className={"alert alert-" + props.color}>
			{props.children}
		</div>
	);
}

function Boiler() {

	return(
		<div>
			<FancyBorder color='success'>
			<Calculator />
			</FancyBorder>
			<FancyBorder color='danger'>
			<Calculator />
			</FancyBorder>
		</div>
	);


}
