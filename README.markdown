# KnockoutJS Mapping Plugin Extension - updateData

This is a simple extension that adds a method to the KnockoutJS mapping plugin. ko.mapping.updateFromJS sometimes gives unexpected results depending on the setup of your application. In order to provide a seamless method of updating a data model, I've created the updateData function that accepts three arguments: the viewModel, the dataModel (that you originally used in the mapping fromJS method), and the new data.

##parameters

<pre>
function(viewModel, dataModel, jsObject) {
</pre>

The parameters are as follows:

###viewModel

viewModel is the viewModel you wish to update

###dataModel

This is the original, non-observable data model that you used to run fromJS.

###jsObject

This is the same object you would put in the second parameter of updateFromJS.

##example

<pre>
dataModel = {
	id: 0,
	name: '',
	role: '',
	title: ''
};

jsObject = {
	id: 15,
	name: 'John',
	role: 'admin',
	title: 'President'
};

var viewModel = ko.mapping.fromJS(dataModel);

//now update the data
ko.mapping.updateData(viewModel, dataModel, jsObject);

viewModel.id(); //returns 15
</pre>