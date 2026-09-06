// discord_app/utils/web/WindowInteractingUtils.tsx
import size from "../../../_runtime/metro/00002__.js";

let c0 = null;
const result = size.fileFinishedImporting("utils/web/WindowInteractingUtils.tsx");

export const INTERACTION_EVENTS = ["click", "mousedown", "mouseup", "keydown", "keyup", "keypress", "contextmenu"];
export function getCurrentlyInteractingWindowId() {
  return c0;
}
export function setCurrentlyInteractingWindowId(arg0) {
  c0 = arg0;
}
export function clearCurrentlyInteractingWindowId(arg0) {
  if (c0 === arg0) {
    c0 = null;
  }
}
