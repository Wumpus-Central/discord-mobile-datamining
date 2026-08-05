// discord_app/modules/routing/native/BackPressManager.tsx
import "initialize";

function handleBackPress() {
  let obj = require("../../../design/components/ContextMenu/native/ContextMenuState.native.tsx") /* updateContextMenuState */;
  obj.hideContextMenu();
  const keyboardType = require("../../keyboard/native/useKeyboardType.tsx") /* useKeyboardType */.getKeyboardType();
  let flag = keyboardType !== require("../../keyboard/native/KeyboardTypes.tsx") /* KeyboardTypes */.KeyboardTypes.SYSTEM;
  if (flag) {
    obj = { type: null };
    obj[0] = tmp(1579).KeyboardTypes.SYSTEM;
    tmp(1478).setKeyboardType(obj);
    flag = true;
    const tmpResult = tmp(1478);
  }
  return flag;
}
require("get ActivityIndicator").BackHandler;
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
let result = require("useKeyboardType").fileFinishedImporting("modules/routing/native/BackPressManager.tsx");

export default backPressManager;