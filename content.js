var m = /[\w-._]+-22/.exec(document.location.href);
if (m)
	chrome.extension.sendRequest({tag:m[0]});
