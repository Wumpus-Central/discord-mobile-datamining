// === Module 1642: nativeEventEmitter ===

// Module 1642 (nativeEventEmitter)
import KeyboardController from "KeyboardController" /* 1643 */;
import _mod1644 from "module_1644" /* 1644 */;
import _mod1645 from "module_1645" /* 1645 */;
import _mod1646 from "module_1646" /* 1646 */;
import _mod1647 from "module_1647" /* 1647 */;
import _mod1648 from "module_1648" /* 1648 */;
import _mod1649 from "module_1649" /* 1649 */;
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
  let fn = _mod1644.default;
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
export const KeyboardControllerView = _mod1645.default;
export const KeyboardControllerViewCommands = _mod1645.Commands;
export const KeyboardGestureArea = fn;
export const RCTOverKeyboardView = _mod1646.default;
export const KeyboardBackgroundView = _mod1647.default;
export (children) => children.children
export const ClippingScrollView = _mod1648.default;
export const RCTKeyboardToolbarGroupView = _mod1649.default;