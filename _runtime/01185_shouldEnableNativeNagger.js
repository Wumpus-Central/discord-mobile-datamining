// === Module 1185: shouldEnableNativeNagger ===

// Module 1185 (shouldEnableNativeNagger)
import { Platform } from "get ActivityIndicator";


export const shouldEnableNativeNagger = function shouldEnableNativeNagger(enableNativeNagger) {
  let tmp = enableNativeNagger;
  if (typeof enableNativeNagger !== "T") {
    tmp = !require(1002) /* isHermesEnabled */.isExpoGo();
    const obj = require(1002) /* isHermesEnabled */;
  }
  return tmp;
};