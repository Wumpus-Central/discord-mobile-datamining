import { isHermesEnabled } from "01002_isHermesEnabled.js";
// _runtime/01185_shouldEnableNativeNagger.js
import { Platform } from "get ActivityIndicator";


export const shouldEnableNativeNagger = function shouldEnableNativeNagger(enableNativeNagger) {
  let tmp = enableNativeNagger;
  if (typeof enableNativeNagger !== "boolean") {
    tmp = !isHermesEnabled /* isHermesEnabled */.isExpoGo();
    const obj = isHermesEnabled /* isHermesEnabled */;
  }
  return tmp;
};