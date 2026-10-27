// === Module 1059: ? ===

// Module 1059
import _mod17 from "module_17" /* 17 */;
import _mod879 from "module_879" /* 879 */;

const Platform = _mod17.Platform;

export const shouldEnableNativeNagger = function shouldEnableNativeNagger(enableNativeNagger) {
  let tmp = enableNativeNagger;
  if (typeof enableNativeNagger !== "boolean") {
    tmp = !_mod879.isExpoGo();
  }
  return tmp;
};