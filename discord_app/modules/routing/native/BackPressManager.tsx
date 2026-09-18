// === Module 14659: BackPressManager ===

// Module 14659 (BackPressManager)
import _mod17 from "module_17" /* 17 */;
import KeyboardUIStore from "KeyboardUIStore" /* 1482 */;
import KeyboardTypes from "KeyboardTypes" /* 1610 */;
import useKeyboardType from "useKeyboardType" /* 4590 */;
import ContextMenuState from "ContextMenuState" /* 8136 */;
import LifecycleManager from "LifecycleManager" /* 1899 */;
import size from "module_2" /* 2 */;

function handleBackPress() {
  ContextMenuState.hideContextMenu();
  const keyboardType = useKeyboardType.getKeyboardType();
  let flag = keyboardType !== KeyboardTypes.KeyboardTypes.SYSTEM;
  if (flag) {
    const obj3 = { type: KeyboardTypes.KeyboardTypes.SYSTEM };
    KeyboardUIStore.setKeyboardType(obj3);
    flag = true;
    const tmpResult = KeyboardUIStore;
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