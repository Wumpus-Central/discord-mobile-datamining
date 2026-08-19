// === Module 13816: handleBackPress ===

// Module 13816 (handleBackPress)
import obj132 from "obj132" /* 2 */;
import get_ActivityIndicator from "get ActivityIndicator" /* 17 */;
import computeEntryState from "computeEntryState" /* 1498 */;
import KeyboardTypes from "KeyboardTypes" /* 1627 */;
import useKeyboardType from "useKeyboardType" /* 4239 */;
import initializeDefault from "initialize" /* 4720 */;
import updateContextMenuState from "updateContextMenuState" /* 9959 */;

function handleBackPress() {
  let obj = updateContextMenuState;
  obj.hideContextMenu();
  const keyboardType = useKeyboardType.getKeyboardType();
  let flag = keyboardType !== KeyboardTypes.KeyboardTypes.SYSTEM;
  if (flag) {
    obj = { type: null };
    obj[0] = KeyboardTypes.KeyboardTypes.SYSTEM;
    computeEntryState.setKeyboardType(obj);
    flag = true;
    const tmpResult = computeEntryState;
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
let result = obj132.fileFinishedImporting("modules/routing/native/BackPressManager.tsx");

export default backPressManager;