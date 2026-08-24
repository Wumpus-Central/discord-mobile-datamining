// === Module 13874: handleBackPress ===

// Module 13874 (handleBackPress)
import set from "set" /* 2 */;
import get_ActivityIndicator from "get ActivityIndicator" /* 17 */;
import KeyboardTypes from "KeyboardTypes" /* 1627 */;
import useKeyboardType from "useKeyboardType" /* 4243 */;
import initializeDefault from "initialize" /* 4726 */;
import updateContextMenuState from "updateContextMenuState" /* 9998 */;

function handleBackPress() {
  let obj = updateContextMenuState;
  obj.hideContextMenu();
  const keyboardType = useKeyboardType.getKeyboardType();
  let flag = keyboardType !== KeyboardTypes.KeyboardTypes.SYSTEM;
  if (flag) {
    obj = { type: null };
    obj[0] = tmp(1627).KeyboardTypes.SYSTEM;
    tmp(1498).setKeyboardType(obj);
    flag = true;
    const tmpResult = tmp(1498);
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