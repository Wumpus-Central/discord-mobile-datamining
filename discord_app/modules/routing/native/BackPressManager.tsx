// discord_app/modules/routing/native/BackPressManager.tsx
import obj132 from "../../../../_runtime/00002_obj132.js";
import get_ActivityIndicator from "../../../../_runtime/00017_get_ActivityIndicator.js";
import computeEntryState from "../../keyboard/native/KeyboardUIStore.native.tsx";
import KeyboardTypes from "../../keyboard/native/KeyboardTypes.tsx";
import useKeyboardType from "../../keyboard/native/useKeyboardType.tsx";
import initializeDefault from "../../../lib/LifecycleManager.tsx";
import updateContextMenuState from "../../../design/components/ContextMenu/native/ContextMenuState.native.tsx";

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