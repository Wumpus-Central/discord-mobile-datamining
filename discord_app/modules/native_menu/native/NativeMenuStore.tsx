// === Module 9625: NativeMenuStore ===

// Module 9625 (NativeMenuStore)
import get_initializedDefault from "get initialized" /* 504 */;
import DispatcherDefault from "Dispatcher" /* 584 */;
import size from "module_2" /* 2 */;

let c0 = null;
let c1 = null;
const Store = get_initializedDefault.Store;
class NativeMenuStore extends Store {
  constructor() {
    const applyArgumentsResult = HermesBuiltin.applyArguments(this, new.target);
    applyArgumentsResult.getMenu = function getMenu() {
      return closure_1_0;
    };
    applyArgumentsResult.isOpen = function isOpen() {
      return null != closure_1_0;
    };
    applyArgumentsResult.getKey = function getKey() {
      return closure_1_1;
    };
    return applyArgumentsResult;
  }
  initialize() {

  }
}
const prototype = NativeMenuStore.prototype;
NativeMenuStore.displayName = "NativeMenuStore";
const obj = {
  SHOW_NATIVE_MENU: function handleShowNativeMenu(arg0) {
    ({ menu: c0, key: c1 } = arg0);
  },
  HIDE_NATIVE_MENU: function handleHideNativeMenu(key) {
    if (null != key.key) {
      if (key.key !== c1) {
        return false;
      }
    }
    c0 = null;
    c1 = null;
  }
};
const nativeMenuStore = new NativeMenuStore(DispatcherDefault, obj);
const result = size.fileFinishedImporting("modules/native_menu/native/NativeMenuStore.tsx");

export default nativeMenuStore;