const value = "some value";

// sync examples

chrome.storage.sync.set({ key: value }).then(function () {
  console.log("Value is set to " + value);
});

chrome.storage.sync.get(["key"]).then(function (result) {
  console.log("Value currently is " + result.key);
});

// local examples

chrome.storage.local.set({ key: value }).then(function () {
  console.log("Value is set to " + value);
});

chrome.storage.local.get(["key"]).then(function (result) {
  console.log("Value currently is " + result.key);
});
