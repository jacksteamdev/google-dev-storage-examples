// extension page modules can use top level await (TLA)
// TLA is not available for module type service workers
// TODO: add top level await MDN link
export {};

// In-page cache of the user's options
const options = {};
const optionsForm = document.getElementById("optionsForm");

// Initialize the form with the user's option settings
const data = await chrome.storage.sync.get("options");
Object.assign(options, data.options);
optionsForm.debug.checked = Boolean(options.debug);

// Immediately persist options changes
optionsForm.debug.addEventListener("change", (event) => {
  options.debug = event.target.checked;
  chrome.storage.sync.set({ options });
});
