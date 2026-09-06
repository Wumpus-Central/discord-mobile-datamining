// === Module 14440: BackPressManager ===

// Module 14440 (BackPressManager)
import _mod17 from "module_17" /* 17 */;
import KeyboardTypes from "KeyboardTypes" /* 1609 */;
import useKeyboardType from "useKeyboardType" /* 4427 */;
import ContextMenuState from "ContextMenuState" /* 8667 */;
import LifecycleManager from "LifecycleManager" /* 1898 */;
import size from "module_2" /* 2 */;

function handleBackPress() {
  let obj = ContextMenuState;
  obj.hideContextMenu();
  const keyboardType = useKeyboardType.getKeyboardType();
  let flag = keyboardType !== KeyboardTypes.KeyboardTypes.SYSTEM;
  if (flag) {
    obj = { type: tmp(1609).KeyboardTypes.SYSTEM };
    tmp(1481).setKeyboardType(obj);
    flag = true;
    const tmpResult = tmp(1481);
  }
  return flag;
}
_mod17.BackHandler;
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
let result = size.fileFinishedImporting("modules/routing/native/BackPressManager.tsx");

export default backPressManager;