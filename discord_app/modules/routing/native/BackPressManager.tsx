// discord_app/modules/routing/native/BackPressManager.tsx
import _mod17 from "../../../../_runtime/metro/00017__.js";
import KeyboardTypes from "../../keyboard/native/KeyboardTypes.tsx";
import useKeyboardType from "../../keyboard/native/useKeyboardType.tsx";
import ContextMenuState from "../../../design/components/ContextMenu/native/ContextMenuState.native.tsx";
import LifecycleManager from "../../../lib/LifecycleManager.tsx";
import size from "../../../../_runtime/metro/00002__.js";

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
class BackPressManager extends tmp2 {}
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
