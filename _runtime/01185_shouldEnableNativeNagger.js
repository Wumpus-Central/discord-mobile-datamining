// _runtime/01185_shouldEnableNativeNagger.js
import { Platform } from "get ActivityIndicator";


export const shouldEnableNativeNagger = function shouldEnableNativeNagger(enableNativeNagger) {
  let tmp = enableNativeNagger;
  if (typeof enableNativeNagger !== "boolean") {
    tmp = !require(1002) /* isHermesEnabled */.isExpoGo();
    const obj = require(1002) /* isHermesEnabled */;
  }
  return tmp;
};