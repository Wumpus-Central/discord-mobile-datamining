// _runtime/01668_IS_ANDROID.js
import _mod17 from "metro/00017__.js";

const Platform = _mod17.Platform;
let OS;
if (Platform != null) {
  OS = Platform.OS;
}
let OS1;
if (Platform != null) {
  OS1 = Platform.OS;
}
let OS2;
if (Platform != null) {
  OS2 = Platform.OS;
}
let OS3;
if (Platform != null) {
  OS3 = Platform.OS;
}

export const IS_ANDROID = "android" === OS;
export const IS_IOS = "ios" === OS1;
export const IS_WEB = "web" === OS2;
export const IS_JEST = undefined !== globalThis.jest || false;
export const IS_WINDOWS = "windows" === OS3;
export const IS_WINDOW_AVAILABLE = typeof window !== "undefined";
