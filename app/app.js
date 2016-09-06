// Include the Main React Dependencies
var React = require('react');
var ReactDOM = require('react-dom');

// This code renders a simple HTML Div.
// The key takeaway here is that we render an ENTIRE DIV. 
// Note that ReactDOM.render cannot render a block of HTML elements witout them all fitting within a single div or container.
ReactDOM.render(

		<p>Hello World!</p>,
	document.getElementById('app')
)