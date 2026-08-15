// _runtime/01872_TEST_ID_KEYBOARD_TOOLBAR.js
const combined = "" + "keyboard.toolbar" + ".previous";
const combined1 = "" + "keyboard.toolbar" + ".next";
const combined2 = "" + "keyboard.toolbar" + ".content";
const combined3 = "" + "keyboard.toolbar" + ".done";
let num = 0;
const tmp6 = require("AndroidSoftInputModes").KEYBOARD_BORDER_RADIUS > 0;
if (tmp6) {
  num = -11;
}

export const TEST_ID_KEYBOARD_TOOLBAR = "keyboard.toolbar";
export const TEST_ID_KEYBOARD_TOOLBAR_PREVIOUS = combined;
export const TEST_ID_KEYBOARD_TOOLBAR_NEXT = combined1;
export const TEST_ID_KEYBOARD_TOOLBAR_CONTENT = combined2;
export const TEST_ID_KEYBOARD_TOOLBAR_DONE = combined3;
export const KEYBOARD_TOOLBAR_HEIGHT = 42;
export const DEFAULT_OPACITY = "FF";
export const KEYBOARD_HAS_ROUNDED_CORNERS = tmp6;
export const OPENED_OFFSET = num;