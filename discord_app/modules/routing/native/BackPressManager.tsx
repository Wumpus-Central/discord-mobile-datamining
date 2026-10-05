// discord_app/modules/routing/native/BackPressManager.tsx
import react_native from "../../../../_runtime/00017_react-native.js";
import PlatformUtils from "../../../utils/PlatformUtils.tsx";
import KeyboardUIStore from "../../keyboard/native/KeyboardUIStore.native.tsx";
import KeyboardTypes from "../../keyboard/native/KeyboardTypes.tsx";
import useKeyboardType from "../../keyboard/native/useKeyboardType.tsx";
import LifecycleManager from "../../../lib/LifecycleManager.tsx";
import size from "../../../../_runtime/metro/00002__.js";

function handleBackPress() {
  const obj = useKeyboardType;
  const keyboardType = obj.getKeyboardType();
  let flag = keyboardType !== KeyboardTypes.KeyboardTypes.SYSTEM;
  if (flag) {
    const obj2 = { type: KeyboardTypes.KeyboardTypes.SYSTEM };
    const setKeyboardType = KeyboardUIStore.setKeyboardType;
    KeyboardUIStore;
    setKeyboardType(obj2);
    flag = true;
  }
  return flag;
}
const BackHandler = react_native.BackHandler;
class BackPressManager extends LifecycleManager {
  _initialize() {
    const obj = PlatformUtils;
    if (obj.isAndroid()) {
      const self = this;
      const result = this._initializeGlobalBackPressListener();
    }
  }
  _initializeGlobalBackPressListener() {
    this._backPressEventSubscription = BackHandler.addEventListener("hardwareBackPress", handleBackPress);
  }
  _terminate() {
    const _backPressEventSubscription = this._backPressEventSubscription;
    if (_backPressEventSubscription != null) {
      _backPressEventSubscription.remove();
    }
  }
}
const prototype = BackPressManager.prototype;
const backPressManager = new BackPressManager();
let result = size.fileFinishedImporting("modules/routing/native/BackPressManager.tsx");

export default backPressManager;
