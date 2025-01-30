import fs from "fs";

let script = fs.readFileSync("./template.js", "utf-8");

let list = [
	"aaryan",
	"potluck",
	"saad",
	"amir",
	"sanchari",
	"omama",
	"anisha",
	"vanessa",
	"maryam",
	"jose",
	"alexandra",
	"yigit",
	"aryaman",
	"aasiya",
	"sarita",
	"miki",
	"esther",
	"tucge",
	"yigit",
	"alexandra",
	"adarsh",
	"kithi",
	"simar",
	"simran",
	"michelle",
	"Liz",
	"ayesha",
	"dima",
	"celine",
	"nehir",
	"aiyana",
	"alex",
	"josh",
	"ian",
	"jan",
	"mahi",
	"amani"
]

let template = (name) => `
	<!DOCTYPE html>
	<html>

	<head>
		<title>Potluck</title>
		<meta charset="utf-8" name="viewport" content="width=device-width, initial-scale=1" />
	</head>

	<style>
		* {
			margin: 0;
			padding: 0;
			font-family: monospace;
		}

		a {
			all: unset;
			color: orange;
			text-decoration: underline;
			cursor: pointer;
		}

		#message {
			font-family: monospace;
			padding: 20px;
		}

		body {
			background: #004cff;
			color: white;
		}

		#buttons {
			display: grid;
			grid-gap: 10px;
			padding: 2px 10px;
		}

		button {
			all: unset;
			border: 1px solid white;
			display: flex;
			justify-content: center;
			align-items: center;
			cursor: pointer;
		}

		.controls {
			display: grid;
			padding: 10px 0;
			grid-template-columns: 6fr 1fr 1.5fr;
			gridGap: 50px
		}

		.container {
			max-width: 550px;
			margin: 0 auto;
		}

		input[type="range"] {
			margin: auto;
			-webkit-appearance: none;
			position: relative;
			overflow: hidden;
			height: 20px;
			width: 200px;
			cursor: pointer;
			border-radius: 0;

			background: #fff2;
			margin-right: 10px;
			margin-bottom: 2px;
		}

		.controls span {
			padding: 3px;
			border: 1px solid white;
			border-radius: 5px;
		}


		/*
	 * 1. Set to 0 width and remove border for a slider without a thumb
	 * 2. Shadow is negative the full width of the input and has a spread 
	 *    of the width of the input.
	 */
		::-webkit-slider-thumb {
			-webkit-appearance: none;
			width: 20px;
			/* 1 */
			height: 20px;
			background: #ffffff22;
		}

		::-moz-range-track {
			height: 20px;
		}

		::-moz-range-thumb {
			background: #ffffff22;
			height: 20px;
			width: 20px;
			box-sizing: border-box;
			border-radius: 0px !important;
			border: 1px white solid;
		}

		::-ms-fill-lower {
			background: dodgerblue;
		}

		::-ms-thumb {
			background: #ffffff22;
			height: 20px;
			width: 20px;
			box-sizing: border-box;
		}

		::-ms-ticks-after {
			display: none;
		}

		::-ms-ticks-before {
			display: none;
		}

		::-ms-track {
			background: #ddd;
			color: transparent;
			height: 40px;
			border: none;
		}

		::-ms-tooltip {
			display: none;
		}
	</style>

	<body>
		<div class="container"></div>
	</body>

	</html>

	<script>
		let name = "${name}"
		${script}
	</script>
`

list.forEach((name) => {
	fs.writeFileSync("./" + name + ".html", template(name))
})
