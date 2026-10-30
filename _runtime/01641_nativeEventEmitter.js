// _runtime/01641_nativeEventEmitter.js
import KeyboardController from "01642_KeyboardController.js";
import _mod1643 from "metro/01643__.js";
import _mod1644 from "metro/01644__.js";
import _mod1645 from "metro/01645__.js";
import _mod1646 from "metro/01646__.js";
import _mod1647 from "metro/01647__.js";
import _mod1648 from "metro/01648__.js";
import get_ActivityIndicator from "metro/00017__.js";

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
  let fn = _mod1643.default;
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
export const KeyboardControllerView = _mod1644.default;
export const KeyboardControllerViewCommands = _mod1644.Commands;
export const KeyboardGestureArea = fn;
export const RCTOverKeyboardView = _mod1645.default;
export const KeyboardBackgroundView = _mod1646.default;
export (children) => children.children
export const ClippingScrollView = _mod1647.default;
export const RCTKeyboardToolbarGroupView = _mod1648.default;