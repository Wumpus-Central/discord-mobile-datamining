// === Module 1219: initialize ===

// Module 1219 (initialize)
import initializeDefault from "initialize" /* 589 */;
import dispatcherDefault from "dispatcher" /* 709 */;

const Store = initializeDefault.Store;
class BrowserHandoffStore extends Store {
}
const prototype = BrowserHandoffStore.prototype;
prototype["initialize"] = function initialize() {

};
prototype["isHandoffAvailable"] = function isHandoffAvailable() {
  return false;
};
Object.defineProperty(prototype, "user", {
  get: function user(xuio0C) {
    return null;
  },
  set: undefined
});
Object.defineProperty(prototype, "key", {
  get: function key() {
    return null;
  },
  set: undefined
});
BrowserHandoffStore.displayName = "BrowserHandoffStore";
const browserHandoffStore = new BrowserHandoffStore(dispatcherDefault, {});
const result = require("set").fileFinishedImporting("stores/BrowserHandoffStore.native.tsx");

export default browserHandoffStore;