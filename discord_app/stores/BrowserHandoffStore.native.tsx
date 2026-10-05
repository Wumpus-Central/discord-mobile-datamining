// === Module 503: BrowserHandoffStore ===

// Module 503 (BrowserHandoffStore)
import get_initializedDefault from "get initialized" /* 504 */;
import DispatcherDefault from "Dispatcher" /* 584 */;
import size from "module_2" /* 2 */;

const Store = get_initializedDefault.Store;
class BrowserHandoffStore extends Store {
  initialize() {

  }
  isHandoffAvailable() {
    return false;
  }
}
Object.defineProperty(BrowserHandoffStore.prototype, "key", {
  get: function key() {
    return null;
  },
  set: undefined
});
BrowserHandoffStore.displayName = "BrowserHandoffStore";
const browserHandoffStore = new BrowserHandoffStore(DispatcherDefault, {});
const result = size.fileFinishedImporting("stores/BrowserHandoffStore.native.tsx");

export default browserHandoffStore;