let c0 = null;
const result = require("set").fileFinishedImporting("utils/web/WindowInteractingUtils.tsx");

export const INTERACTION_EVENTS = ["click", "mousedown", "mouseup", "keydown", "keyup", "keypress", "contextmenu"];
export function getCurrentlyInteractingWindowId() {
  return c0;
}
export function setCurrentlyInteractingWindowId(arg0) {
  let closure_0 = arg0;
}
export function clearCurrentlyInteractingWindowId(arg0) {
  if (c0 === arg0) {
    c0 = null;
  }
}