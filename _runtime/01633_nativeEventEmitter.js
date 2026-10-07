// === Module 1633: nativeEventEmitter ===

// Module 1633 (nativeEventEmitter)
import KeyboardController from "KeyboardController" /* 1634 */;
import _mod1635 from "module_1635" /* 1635 */;
import _mod1636 from "module_1636" /* 1636 */;
import _mod1637 from "module_1637" /* 1637 */;
import _mod1638 from "module_1638" /* 1638 */;
import _mod1639 from "module_1639" /* 1639 */;
import _mod1640 from "module_1640" /* 1640 */;
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
  let fn = _mod1635.default;
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
export const KeyboardControllerView = _mod1636.default;
export const KeyboardControllerViewCommands = _mod1636.Commands;
export const KeyboardGestureArea = fn;
export const RCTOverKeyboardView = _mod1637.default;
export const KeyboardBackgroundView = _mod1638.default;
export const RCTKeyboardExtender = (children) => children.children;
export const ClippingScrollView = _mod1639.default;
export const RCTKeyboardToolbarGroupView = _mod1640.default;