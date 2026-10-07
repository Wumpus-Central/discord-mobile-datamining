// _runtime/metro/01061__.js
import _mod17 from "00017__.js";
import _mod878 from "00878__.js";

const Platform = _mod17.Platform;

export const shouldEnableNativeNagger = function shouldEnableNativeNagger(enableNativeNagger) {
  let tmp = enableNativeNagger;
  if (typeof enableNativeNagger !== "boolean") {
    tmp = !_mod878.isExpoGo();
  }
  return tmp;
};
