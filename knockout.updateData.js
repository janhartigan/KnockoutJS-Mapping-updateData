/*
 * Extension to the knockoutjs mapping plugin
 * http://github.com/janhartigan/knockout-mapping-updatedata
 * Requires KnockoutJS and the mapping plugin
 *
 * Dual licensed under the MIT or GPL Version 2 licenses.
 * Jan Hartigan
 */
(function () {
	/**
	 * A function that lets you "update from js" without overriding all the view model properties and methods. You just need to supply
	 * the viewModel, the original JS model on which you based your data (typically what you'd use in the mapping fromJS method), and the new JS 
	 * object that has the updated information.
	 * 
	 * @param Object	viewModel
	 * @param Object	dataModel
	 * @param Object	jsObject
	 * 
	 * @return Object (returns the viewModel)
	 */
	ko.mapping.updateData = function(viewModel, dataModel, jsObject) {
		if (arguments.length < 3) throw new Error("When calling ko.updateData, pass: the view model, the data model, and the updated data.");
		if (!viewModel) throw new Error("The view model is undefined.");
		
		for (var i in dataModel) {
			if (i in jsObject && i in viewModel) {
				viewModel[i](jsObject[i]);
			}
		}
		
		return viewModel;
	}
	
	
	/**
	 * A function that lets you do "toJS" based on your mapping data model that you used in the ko.mapping.fromJS method. You just need to supply
	 * the viewModel and the original JS model on which you based your data. This will return a 
	 * 
	 * @param Object	viewModel
	 * @param Object	dataModel
	 * 
	 * @return Object (basically the dataModel with current values filled in
	 */
	ko.mapping.gatherData = function(viewModel, dataModel) {
		var data = {};
		
		if (arguments.length < 2) throw new Error("When calling ko.gatherData, pass: the view model and the data model.");
		if (!viewModel) throw new Error("The view model is undefined.");
		
		for (var i in dataModel) {
			if (i in viewModel) {
				data[i] = viewModel[i]();
			}
		}
		
		return data;
	}
	
	ko.exportSymbol('ko.mapping.updateData', ko.mapping.updateData);
	ko.exportSymbol('ko.mapping.gatherData', ko.mapping.gatherData);
})();