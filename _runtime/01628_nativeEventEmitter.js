// === Module 1628: nativeEventEmitter ===

// Module 1628 (nativeEventEmitter)
import KeyboardController from "KeyboardController" /* 1629 */;
import _mod1630 from "module_1630" /* 1630 */;
import _mod1631 from "module_1631" /* 1631 */;
import _mod1632 from "module_1632" /* 1632 */;
import _mod1633 from "module_1633" /* 1633 */;
import _mod1634 from "module_1634" /* 1634 */;
import _mod1635 from "module_1635" /* 1635 */;
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
  let fn = _mod1630.default;
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
export const KeyboardControllerView = _mod1631.default;
export const KeyboardControllerViewCommands = _mod1631.Commands;
export const KeyboardGestureArea = fn;
export const RCTOverKeyboardView = _mod1632.default;
export const KeyboardBackgroundView = _mod1633.default;
export const RCTKeyboardExtender = (children) => children.children;
export const ClippingScrollView = _mod1634.default;
export const RCTKeyboardToolbarGroupView = _mod1635.default;