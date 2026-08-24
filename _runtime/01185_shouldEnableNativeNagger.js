// === Module 1185: shouldEnableNativeNagger ===

// Module 1185 (shouldEnableNativeNagger)
import get_ActivityIndicator from "get ActivityIndicator" /* 17 */;
import isHermesEnabled from "isHermesEnabled" /* 1002 */;

const Platform = get_ActivityIndicator.Platform;

export const shouldEnableNativeNagger = function shouldEnableNativeNagger(enableNativeNagger) {
  let tmp = enableNativeNagger;
  if (typeof enableNativeNagger !== "boolean") {
    tmp = !isHermesEnabled.isExpoGo();
    const obj = isHermesEnabled;
  }
  return tmp;
};