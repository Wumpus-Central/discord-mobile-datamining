// === Module 503: BrowserHandoffStore ===

// Module 503 (BrowserHandoffStore)
import initializeDefault from "initialize" /* 504 */;
import DispatcherDefault from "Dispatcher" /* 573 */;

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
  get: function user() {
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
const browserHandoffStore = new BrowserHandoffStore(DispatcherDefault, {});
const size = fn(2);
const result = size.fileFinishedImporting("stores/BrowserHandoffStore.native.tsx");

export default browserHandoffStore;