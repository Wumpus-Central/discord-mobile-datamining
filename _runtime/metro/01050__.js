// === Module 1050: ? ===

// Module 1050
import _mod17 from "module_17" /* 17 */;
import _mod867 from "module_867" /* 867 */;

const Platform = _mod17.Platform;

export const shouldEnableNativeNagger = function shouldEnableNativeNagger(enableNativeNagger) {
  let tmp = enableNativeNagger;
  if (typeof enableNativeNagger !== "boolean") {
    tmp = !_mod867.isExpoGo();
  }
  return tmp;
};