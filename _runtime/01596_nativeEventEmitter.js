// === Module 1596: nativeEventEmitter ===

// Module 1596 (nativeEventEmitter)
import get_ActivityIndicator from "get ActivityIndicator";

let NativeEventEmitter;
let Platform;
({ NativeEventEmitter, Platform } = get_ActivityIndicator);
if (require("KeyboardController").default) {
  let _default = require("KeyboardController").default;
} else {
  const _Proxy = Proxy;
  let obj = { get: null };
  obj[0] = function get() {
    const error = new Error("The package 'react-native-keyboard-controller' doesn't seem to be linked. Make sure: \n\n- You rebuilt the app after installing the package\n- You are not using Expo Go\n");
    throw error;
  };
  _default = new Proxy({}, obj);
}
let c0 = "KeyboardController::";
const nativeEventEmitter = new NativeEventEmitter(_default);
obj = {
  addListener(arg0, arg1) {
    return nativeEventEmitter.addListener(c0 + arg0, arg1);
  }
};
obj = {
  addListener(arg0, arg1) {
    return nativeEventEmitter.addListener(c0 + arg0, arg1);
  }
};
if (Platform.Version >= 30) {
  let fn = require("__INTERNAL_VIEW_CONFIG").default;
} else {
  fn = (children) => children.children;
}

export const KeyboardControllerNative = _default;
export const KeyboardEvents = obj;
export const FocusedInputEvents = obj;
export const WindowDimensionsEvents = {
  addListener(arg0, arg1) {
    return nativeEventEmitter.addListener(c0 + arg0, arg1);
  }
};
export const KeyboardControllerView = require("__INTERNAL_VIEW_CONFIG").default;
export const KeyboardControllerViewCommands = require("__INTERNAL_VIEW_CONFIG").Commands;
export const KeyboardGestureArea = fn;
export const RCTOverKeyboardView = require("__INTERNAL_VIEW_CONFIG").default;
export const KeyboardBackgroundView = require("__INTERNAL_VIEW_CONFIG").default;
export const RCTKeyboardExtender = (children) => children.children;
export const ClippingScrollView = require("__INTERNAL_VIEW_CONFIG").default;
export const RCTKeyboardToolbarGroupView = require("__INTERNAL_VIEW_CONFIG").default;