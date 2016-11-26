var m = /[\w-._]+-22/.exec(document.location.href);
if (m)
	chrome.runtime.sendMessage({tag:m[0]});
