// The buttons use declarative invoker commands (commandfor/command) and the
// dialog uses closedby="any". These listeners are fallbacks for browsers
// without those features.
const dialog = document.querySelector("#shader-dialog");

if (!("command" in HTMLButtonElement.prototype)) {
  document.querySelector("#explain-button").addEventListener("click", () => dialog.showModal());
  document.querySelector("#close-dialog").addEventListener("click", () => dialog.close());
}

if (!("closedBy" in HTMLDialogElement.prototype)) {
  dialog.addEventListener("click", (event) => {
    if (event.target === dialog) dialog.close();
  });
}
