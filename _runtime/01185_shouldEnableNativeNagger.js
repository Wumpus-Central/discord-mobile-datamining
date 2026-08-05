// _runtime/01185_shouldEnableNativeNagger.js
import { Platform } from "get ActivityIndicator";


export const shouldEnableNativeNagger = function shouldEnableNativeNagger(enableNativeNagger) {
  let tmp = enableNativeNagger;
  if (typeof enableNativeNagger !== "boolean") {
    tmp = !require("01002_isHermesEnabled.js") /* isHermesEnabled */.isExpoGo();
    const obj = require("01002_isHermesEnabled.js") /* isHermesEnabled */;
  }
  return tmp;
};