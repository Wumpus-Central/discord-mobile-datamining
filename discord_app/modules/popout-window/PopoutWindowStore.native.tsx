// === Module 4664: initialize ===

// Module 4664 (initialize)
import initializeDefault from "initialize" /* 589 */;
import dispatcherDefault from "dispatcher" /* 709 */;

let closure_0 = {};
const PersistedStore = initializeDefault.PersistedStore;
class PopoutWindowStore extends PersistedStore {
}
const prototype = PopoutWindowStore.prototype;
prototype["initialize"] = function initialize(arg0) {
  let obj = arg0;
  if (arg0 == null) {
    obj = {};
  }
};
prototype["getWindow"] = function getWindow() {
  return null;
};
prototype["getWindowState"] = function getWindowState() {
  return null;
};
prototype["getWindowKeys"] = function getWindowKeys() {
  return [];
};
prototype["getWindowOpen"] = function getWindowOpen(CHANNEL_CALL_POPOUT) {
  return false;
};
prototype["getIsAlwaysOnTop"] = function getIsAlwaysOnTop() {
  return false;
};
prototype["getWindowFocused"] = function getWindowFocused() {
  return false;
};
prototype["getWindowVisible"] = function getWindowVisible() {
  return false;
};
prototype["getState"] = function getState() {
  return closure_0;
};
prototype["isWindowFullyInitialized"] = function isWindowFullyInitialized() {
  return false;
};
prototype["isWindowFullScreen"] = function isWindowFullScreen() {
  return false;
};
prototype["unmountWindow"] = function unmountWindow() {

};
PopoutWindowStore.displayName = "PopoutWindowStore";
PopoutWindowStore.persistKey = "PopoutWindowStoreIOS";
const popoutWindowStore = new PopoutWindowStore(dispatcherDefault, {});
const result = require("set").fileFinishedImporting("modules/popout-window/PopoutWindowStore.native.tsx");

export default popoutWindowStore;