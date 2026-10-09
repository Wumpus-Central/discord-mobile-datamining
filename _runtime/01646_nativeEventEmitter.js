// === Module 1646: nativeEventEmitter ===

// Module 1646 (nativeEventEmitter)
import KeyboardController from "KeyboardController" /* 1647 */;
import _mod1648 from "module_1648" /* 1648 */;
import _mod1649 from "module_1649" /* 1649 */;
import _mod1650 from "module_1650" /* 1650 */;
import _mod1651 from "module_1651" /* 1651 */;
import _mod1652 from "module_1652" /* 1652 */;
import _mod1653 from "module_1653" /* 1653 */;
import get_ActivityIndicator from "module_17" /* 17 */;

({ NativeEventEmitter, Platform } = get_ActivityIndicator);
if (KeyboardController.default) {
  let _default = KeyboardController.default;
} else {
  const _Proxy = Proxy;
  const obj = {
    get() {
        const error = new Error("The package 'react-native-keyboard-controller' doesn't seem to be linked. Make sure: \n\n- You rebuilt the app after installing the package\n- You are not using Expo Go\n");
        throw error;
      }
  };
  _default = new Proxy({}, obj);
}
let c0 = "KeyboardController::";
const nativeEventEmitter = new NativeEventEmitter(_default);
if (Platform.Version >= 30) {
  let fn = _mod1648.default;
} else {
  fn = (children) => children.children;
}

export const KeyboardControllerNative = _default;
export const KeyboardEvents = {
  addListener(arg0, arg1) {
    return nativeEventEmitter.addListener(c0 + arg0, arg1);
  }
};
export const FocusedInputEvents = {
  addListener(arg0, arg1) {
    return nativeEventEmitter.addListener(c0 + arg0, arg1);
  }
};
export const WindowDimensionsEvents = {
  addListener(arg0, arg1) {
    return nativeEventEmitter.addListener(c0 + arg0, arg1);
  }
};
export const KeyboardControllerView = _mod1649.default;
export const KeyboardControllerViewCommands = _mod1649.Commands;
export const KeyboardGestureArea = fn;
export const RCTOverKeyboardView = _mod1650.default;
export const KeyboardBackgroundView = _mod1651.default;
export const RCTKeyboardExtender = (children) => children.children;
export const ClippingScrollView = _mod1652.default;
export const RCTKeyboardToolbarGroupView = _mod1653.default;