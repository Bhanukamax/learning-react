<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title></title>
	<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/3.3.7/css/bootstrap.css" />
</head>
<body>
<section>
	<div id="root"></div>
</section>

	<?php $q = '?' . rand(1, 900) . '=' . rand(500, 5000); ?>

	
	<script src="https://cdnjs.cloudflare.com/ajax/libs/react/15.5.4/react.min.js"></script>
	<script src="https://cdnjs.cloudflare.com/ajax/libs/react/15.5.4/react-dom.min.js"></script>
	<script src="../dist/main.js<?php echo($q)?>" ></script>
</body>
</html>
