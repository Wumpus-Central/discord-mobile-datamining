// === Module 4673: isNativePlatformSupported ===

// Module 4673 (isNativePlatformSupported)
import get_ActivityIndicator from "get ActivityIndicator" /* 17 */;

({ Platform, UIManager: c0 } = get_ActivityIndicator);
let c1 = true;
let c2 = false;

export const isNativePlatformSupported = true;
export const enableScreens = function enableScreens() {
  let flag = arg0;
  if (arg0 === undefined) {
    flag = true;
  }
  if (flag) {
    flag = !viewManagerConfig.getViewManagerConfig("RNSScreen");
  }
  if (flag) {
    const _console = console;
    console.error("Screen native module hasn't been linked. Please check the react-native-screens README for more details");
  }
};
export function enableFreeze() {
  let flag = arg0;
  if (arg0 === undefined) {
    flag = true;
  }
}
export function screensEnabled() {
  return c1;
}
export function freezeEnabled() {
  return c2;
}