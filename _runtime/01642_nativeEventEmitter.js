// _runtime/01642_nativeEventEmitter.js
import KeyboardController from "01643_KeyboardController.js";
import __INTERNAL_VIEW_CONFIG from "metro/01644___INTERNAL_VIEW_CONFIG.js";
import __INTERNAL_VIEW_CONFIG2 from "metro/01645___INTERNAL_VIEW_CONFIG.js";
import __INTERNAL_VIEW_CONFIG3 from "metro/01646___INTERNAL_VIEW_CONFIG.js";
import __INTERNAL_VIEW_CONFIG4 from "metro/01647___INTERNAL_VIEW_CONFIG.js";
import __INTERNAL_VIEW_CONFIG5 from "metro/01648___INTERNAL_VIEW_CONFIG.js";
import __INTERNAL_VIEW_CONFIG6 from "metro/01649___INTERNAL_VIEW_CONFIG.js";
import get_ActivityIndicator from "00017_get_ActivityIndicator.js";

({ NativeEventEmitter, Platform } = get_ActivityIndicator);
if (KeyboardController.default) {
  let _default = KeyboardController.default;
} else {
  const _Proxy = Proxy;
  let obj = { get: null };
  obj[0] = function get() {
    error = new Error(
      "The package 'react-native-keyboard-controller' doesn't seem to be linked. Make sure: \n\n- You rebuilt the app after installing the package\n- You are not using Expo Go\n",
    );
    throw error;
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
  let fn = __INTERNAL_VIEW_CONFIG.default;
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
export const KeyboardControllerView = __INTERNAL_VIEW_CONFIG2.default;
export const KeyboardControllerViewCommands = __INTERNAL_VIEW_CONFIG2.Commands;
export const KeyboardGestureArea = fn;
export const RCTOverKeyboardView = __INTERNAL_VIEW_CONFIG3.default;
export const KeyboardBackgroundView = __INTERNAL_VIEW_CONFIG4.default;
export const RCTKeyboardExtender = (children) => children.children;
export const ClippingScrollView = __INTERNAL_VIEW_CONFIG5.default;
export const RCTKeyboardToolbarGroupView = __INTERNAL_VIEW_CONFIG6.default;
