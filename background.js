// Called when the user clicks on the icon for the extension
	chrome.browserAction.onClicked.addListener(function(tab) {
	  chrome.tabs.executeScript(
	      null, {file: "script.js"});
	});