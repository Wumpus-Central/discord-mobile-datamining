// discord_app/stores/BrowserHandoffStore.native.tsx
import get_initializedDefault from "../../discord_common/js/packages/flux/index.tsx";
import DispatcherDefault from "../Dispatcher.tsx";
import size from "../../_runtime/metro/00002__.js";

const Store = get_initializedDefault.Store;
class BrowserHandoffStore extends Store {
  initialize() {}
  isHandoffAvailable() {
    return false;
  }
}
Object.defineProperty(BrowserHandoffStore.prototype, "key", {
  get: function key() {
    return null;
  },
  set: undefined,
});
BrowserHandoffStore.displayName = "BrowserHandoffStore";
const browserHandoffStore = new BrowserHandoffStore(DispatcherDefault, {});
const result = size.fileFinishedImporting("stores/BrowserHandoffStore.native.tsx");

export default browserHandoffStore;
