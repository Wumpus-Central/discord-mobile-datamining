// === Module 1061: ? ===

// Module 1061
import _mod17 from "module_17" /* 17 */;
import _mod878 from "module_878" /* 878 */;

const Platform = _mod17.Platform;

export const shouldEnableNativeNagger = function shouldEnableNativeNagger(enableNativeNagger) {
  let tmp = enableNativeNagger;
  if (typeof enableNativeNagger !== "boolean") {
    tmp = !_mod878.isExpoGo();
  }
  return tmp;
};