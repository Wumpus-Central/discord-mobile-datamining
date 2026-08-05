// _runtime/01185_shouldEnableNativeNagger.js
import { Platform } from "get ActivityIndicator";
import { isHermesEnabled } from "01002_isHermesEnabled.js";


export const shouldEnableNativeNagger = function shouldEnableNativeNagger(enableNativeNagger) {
  let tmp = enableNativeNagger;
  if (typeof enableNativeNagger !== "boolean") {
    tmp = !isHermesEnabled /* isHermesEnabled */.isExpoGo();
    const obj = isHermesEnabled /* isHermesEnabled */;
  }
  return tmp;
};