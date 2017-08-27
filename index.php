<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title></title>
	<script src="https://cdnjs.cloudflare.com/ajax/libs/react/15.5.4/react.js"></script>
	<script src="https://cdnjs.cloudflare.com/ajax/libs/react/15.5.4/react-dom.js"></script>
	<script src="https://unpkg.com/babel-standalone@6/babel.min.js"></script>
	<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/3.3.7/css/bootstrap.css" />
</head>
<body>
<section>
	<div id="root"></div>
</section>

	<?php $q = '?' . rand(1, 900) . '=' . rand(500, 5000); ?>

	
	<script src="form.js<?php echo($q)?>" type="text/babel"></script>
	<script src="app.js<?php echo($q)?>" type="text/babel"></script>
</body>
</html>
