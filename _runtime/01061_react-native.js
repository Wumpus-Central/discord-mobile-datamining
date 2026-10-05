// _runtime/01061_react-native.js
import react_native from "00017_react-native.js";
import _mod878 from "metro/00878__.js";

const Platform = react_native.Platform;

export const shouldEnableNativeNagger = function shouldEnableNativeNagger(enableNativeNagger) {
  let tmp = enableNativeNagger;
  if (typeof enableNativeNagger !== "boolean") {
    const obj = _mod878;
    tmp = !obj.isExpoGo();
  }
  return tmp;
};
