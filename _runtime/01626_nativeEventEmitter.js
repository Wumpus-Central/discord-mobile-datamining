// _runtime/01626_nativeEventEmitter.js
import KeyboardController from "01627_KeyboardController.js";
import _mod1628 from "metro/01628__.js";
import _mod1629 from "metro/01629__.js";
import _mod1630 from "metro/01630__.js";
import _mod1631 from "metro/01631__.js";
import _mod1632 from "metro/01632__.js";
import _mod1633 from "metro/01633__.js";
import get_ActivityIndicator from "metro/00017__.js";

({ NativeEventEmitter, Platform } = get_ActivityIndicator);
if (KeyboardController.default) {
  let _default = KeyboardController.default;
} else {
  const _Proxy = Proxy;
  let obj = {
    get() {
      const error = new Error(
        "The package 'react-native-keyboard-controller' doesn't seem to be linked. Make sure: \n\n- You rebuilt the app after installing the package\n- You are not using Expo Go\n",
      );
      throw error;
    },
  };
  _default = new Proxy({}, obj);
}
let c0 = "KeyboardController::";
const nativeEventEmitter = new NativeEventEmitter(_default);
obj = {
  addListener(arg0, arg1) {
    return nativeEventEmitter.addListener(c0 + arg0, arg1);
  },
};
obj = {
  addListener(arg0, arg1) {
    return nativeEventEmitter.addListener(c0 + arg0, arg1);
  },
};
if (Platform.Version >= 30) {
  let fn = _mod1628.default;
} else {
  fn = (children) => children.children;
}

export const KeyboardControllerNative = _default;
export const KeyboardEvents = obj;
export const FocusedInputEvents = obj;
export const WindowDimensionsEvents = {
  addListener(arg0, arg1) {
    return nativeEventEmitter.addListener(c0 + arg0, arg1);
  },
};
export const KeyboardControllerView = _mod1629.default;
export const KeyboardControllerViewCommands = _mod1629.Commands;
export const KeyboardGestureArea = fn;
export const RCTOverKeyboardView = _mod1630.default;
export const KeyboardBackgroundView = _mod1631.default;
export const RCTKeyboardExtender = (children) => children.children;
export const ClippingScrollView = _mod1632.default;
export const RCTKeyboardToolbarGroupView = _mod1633.default;
