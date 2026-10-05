// === Module 5731: react-native ===

// Module 5731 (react-native)
import react_native from "react-native" /* 17 */;

let Platform;
let _window;
({ Platform, UIManager: _window } = react_native);
let flag = false;

export const isNativePlatformSupported = true;
export const enableScreens = function enableScreens() {
  flag = arg0;
  if (arg0 === undefined) {
    flag = true;
  }
  if (flag) {
    flag = !_window.getViewManagerConfig("RNSScreen");
  }
  if (flag) {
    const _console = console;
    console.error("Screen native module hasn't been linked. Please check the react-native-screens README for more details");
  }
};
export function enableFreeze() {
  flag = arg0;
  if (arg0 === undefined) {
    flag = true;
  }
}
export function screensEnabled() {
  return flag;
}
export function freezeEnabled() {
  return flag;
}