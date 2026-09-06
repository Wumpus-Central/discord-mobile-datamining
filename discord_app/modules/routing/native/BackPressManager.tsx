// === Module 14440: handleBackPress ===

// Module 14440 (handleBackPress)
import set from "set" /* 2 */;
import get_ActivityIndicator from "get ActivityIndicator" /* 17 */;
import KeyboardTypes from "KeyboardTypes" /* 1609 */;
import initializeDefault from "initialize" /* 1898 */;
import useKeyboardType from "useKeyboardType" /* 4427 */;
import updateContextMenuState from "updateContextMenuState" /* 8667 */;

function handleBackPress() {
  let obj = updateContextMenuState;
  obj.hideContextMenu();
  const keyboardType = useKeyboardType.getKeyboardType();
  let flag = keyboardType !== KeyboardTypes.KeyboardTypes.SYSTEM;
  if (flag) {
    obj = { type: null };
    obj[0] = tmp(1609).KeyboardTypes.SYSTEM;
    tmp(1481).setKeyboardType(obj);
    flag = true;
    const tmpResult = tmp(1481);
  }
  return flag;
}
get_ActivityIndicator.BackHandler;
initializeDefault;
class BackPressManager extends tmp2 {
}
const prototype = BackPressManager.prototype;
prototype["_initialize"] = function _initialize() {
  if (obj.isAndroid()) {
    const self = this;
    const result = this._initializeGlobalBackPressListener();
  }
};
prototype["_initializeGlobalBackPressListener"] = function _initializeGlobalBackPressListener() {
  this._backPressEventSubscription = BackHandler.addEventListener("hardwareBackPress", handleBackPress);
};
prototype["_terminate"] = function _terminate() {
  const _backPressEventSubscription = this._backPressEventSubscription;
  if (_backPressEventSubscription != null) {
    _backPressEventSubscription.remove();
  }
};
const backPressManager = new BackPressManager();
let result = set.fileFinishedImporting("modules/routing/native/BackPressManager.tsx");

export default backPressManager;