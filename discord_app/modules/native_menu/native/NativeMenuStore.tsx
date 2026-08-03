// === Module 9580: initialize ===

// Module 9580 (initialize)
import { Store } from "initialize";

let c0 = null;
let c1 = null;
class NativeMenuStore extends Store {
  constructor() {
    applyArgumentsResult = HermesBuiltin.applyArguments(new.target, new.target);
    applyArgumentsResult.getMenu = function getMenu() {
      return closure_0;
    };
    applyArgumentsResult.isOpen = function isOpen() {
      return null != closure_0;
    };
    applyArgumentsResult.getKey = function getKey() {
      return closure_1;
    };
    return applyArgumentsResult;
  }
}
NativeMenuStore.prototype["initialize"] = function initialize() {

};
NativeMenuStore.displayName = "NativeMenuStore";
const nativeMenuStore = new NativeMenuStore(require("dispatcher"), {
  SHOW_NATIVE_MENU: function handleShowNativeMenu(arg0) {
    let c0;
    let c1;
    ({ menu: c0, key: c1 } = arg0);
  },
  HIDE_NATIVE_MENU: function handleHideNativeMenu(key) {
    if (null != key.key) {
      if (key !== c1) {
        return false;
      }
    }
    let c0 = null;
    c1 = null;
  }
});
const result = require("set").fileFinishedImporting("modules/native_menu/native/NativeMenuStore.tsx");

export default nativeMenuStore;