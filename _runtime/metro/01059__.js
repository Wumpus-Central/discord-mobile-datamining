// _runtime/metro/01059__.js
import _mod17 from "00017__.js";
import _mod879 from "00879__.js";

const Platform = _mod17.Platform;

export const shouldEnableNativeNagger = function shouldEnableNativeNagger(enableNativeNagger) {
  let tmp = enableNativeNagger;
  if (typeof enableNativeNagger !== "boolean") {
    tmp = !_mod879.isExpoGo();
  }
  return tmp;
};
