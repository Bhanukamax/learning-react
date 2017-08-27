
function Test() {
	return(
		<div>
			<h2> testing </h2>
	</div>
	);
}

function App() {
		const items = ['rise','coconut', 'milk', 'chicken', 'carrot', 'banana'];
	return(
	<div className="container">
			<div className="row">
				<div className="col-xs-12">
					<h1>Welcome from React Prototype Starter Kit !!</h1>
					<Test />
					<NameForm />
				<div className="col-xs-12">
				</div>

					<NameForm />
				<div className="col-xs-12">
				</div>
					<ReservationForm/>
				<div className="col-xs-12">
				</div>
					<FlavorForm items={items} />
				</div>
			</div>
	</div>
	);
}

ReactDOM.render(
		<App />,
	document.getElementById('root')
);
