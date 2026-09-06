// _runtime/metro/04915__.js
import get_ActivityIndicator from "00017__.js";

({ Platform, UIManager: closure_0 } = get_ActivityIndicator);

export const isNativePlatformSupported = true;
export const enableScreens = function enableScreens() {
  flag = arg0;
  if (arg0 === undefined) {
    flag = true;
  }
  if (flag) {
    flag = !viewManagerConfig.getViewManagerConfig("RNSScreen");
  }
  if (flag) {
    const _console = console;
    console.error(
      "Screen native module hasn't been linked. Please check the react-native-screens README for more details",
    );
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
