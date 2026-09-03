// discord_app/stores/BrowserHandoffStore.native.tsx
import initializeDefault from "../../discord_common/js/packages/flux/index.tsx";
import dispatcherDefault from "../Dispatcher.tsx";

const Store = initializeDefault.Store;
class BrowserHandoffStore extends Store {}
const prototype = BrowserHandoffStore.prototype;
prototype["initialize"] = function initialize() {};
prototype["isHandoffAvailable"] = function isHandoffAvailable() {
  return false;
};
Object.defineProperty(prototype, "user", {
  get: function user(author1, id, EMBED) {
    return null;
  },
  set: undefined,
});
Object.defineProperty(prototype, "key", {
  get: function key() {
    return null;
  },
  set: undefined,
});
BrowserHandoffStore.displayName = "BrowserHandoffStore";
const browserHandoffStore = new BrowserHandoffStore(dispatcherDefault, {});
const result = require("set").fileFinishedImporting("stores/BrowserHandoffStore.native.tsx");

export default browserHandoffStore;
