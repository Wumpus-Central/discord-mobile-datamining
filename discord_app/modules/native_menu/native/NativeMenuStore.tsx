// === Module 9684: NativeMenuStore ===

// Module 9684 (NativeMenuStore)
import initializeDefault from "initialize" /* 504 */;
import DispatcherDefault from "Dispatcher" /* 573 */;

let c0 = null;
let c1 = null;
const Store = initializeDefault.Store;
class NativeMenuStore extends Store {
  constructor() {
    applyArgumentsResult = HermesBuiltin.applyArguments(new.target, new.target);
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
}
NativeMenuStore.prototype["initialize"] = function initialize() {

};
NativeMenuStore.displayName = "NativeMenuStore";
const nativeMenuStore = new NativeMenuStore(DispatcherDefault, {
  SHOW_NATIVE_MENU: function handleShowNativeMenu(arg0) {
    ({ menu: c0, key: c1 } = arg0);
  },
  HIDE_NATIVE_MENU: function handleHideNativeMenu(key) {
    if (null != key.key) {
      if (key !== c1) {
        return false;
      }
    }
    c0 = null;
    c1 = null;
  }
});
const size = fn(2);
const result = size.fileFinishedImporting("modules/native_menu/native/NativeMenuStore.tsx");

export default nativeMenuStore;