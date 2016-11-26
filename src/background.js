chrome.runtime.onMessage.addListener(
	function( request, sender, sendResponse )
	{
		var tag = request.tag;
		localStorage["tag"] = tag;
		chrome.browserAction.setTitle({title:"Tag: "+tag});
	}
);
