// _runtime/01182_shouldEnableNativeNagger.js
import get_ActivityIndicator from "00017_get_ActivityIndicator.js";
import isHermesEnabled from "00999_isHermesEnabled.js";

const Platform = get_ActivityIndicator.Platform;

export const shouldEnableNativeNagger = function shouldEnableNativeNagger(enableNativeNagger) {
  let tmp = enableNativeNagger;
  if (typeof enableNativeNagger !== "boolean") {
    tmp = !isHermesEnabled.isExpoGo();
    const obj = isHermesEnabled;
  }
  return tmp;
};
