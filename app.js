


function Test() {
	return(
		<div>
			<h2> testing </h2>
	</div>
	);
}




function App() {
	return(
	
	<div>
	<h1>Welcome from React Prototype Starter Kit !!</h1>
			<Test />
			<NameForm />
			<NameForm />
	</div>
	
	);

}



ReactDOM.render(
		<App />,
	document.getElementById('root')
);
