// === Module 1633: KeyboardControllerNative ===

// Module 1633 (KeyboardControllerNative)
import react_native from "react-native" /* 1634 */;
import _mod1635 from "module_1635" /* 1635 */;
import _mod1636 from "module_1636" /* 1636 */;
import _mod1637 from "module_1637" /* 1637 */;
import _mod1638 from "module_1638" /* 1638 */;
import react_native2 from "react-native" /* 1639 */;
import _mod1640 from "module_1640" /* 1640 */;
import react_native3 from "react-native" /* 17 */;

let NativeEventEmitter;
let Platform;
let _default;
let fn;
({ NativeEventEmitter, Platform } = react_native3);
if (react_native.default) {
  _default = react_native.default;
} else {
  const _Proxy = Proxy;
  const self = this;
  const self2 = this;
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
const obj2 = {
  addListener(arg0, arg1) {
    return nativeEventEmitter.addListener(c0 + arg0, arg1);
  }
};
const obj3 = {
  addListener(arg0, arg1) {
    return nativeEventEmitter.addListener(c0 + arg0, arg1);
  }
};
const obj4 = {
  addListener(arg0, arg1) {
    return nativeEventEmitter.addListener(c0 + arg0, arg1);
  }
};
if (Platform.Version >= 30) {
  fn = _mod1635.default;
} else {
  fn = (children) => children.children;
}

export const KeyboardControllerNative = _default;
export const KeyboardEvents = obj2;
export const FocusedInputEvents = obj3;
export const WindowDimensionsEvents = obj4;
export const KeyboardControllerView = _mod1636.default;
export const KeyboardControllerViewCommands = _mod1636.Commands;
export const KeyboardGestureArea = fn;
export const RCTOverKeyboardView = _mod1637.default;
export const KeyboardBackgroundView = _mod1638.default;
export const RCTKeyboardExtender = (children) => children.children;
export const ClippingScrollView = react_native2.default;
export const RCTKeyboardToolbarGroupView = _mod1640.default;