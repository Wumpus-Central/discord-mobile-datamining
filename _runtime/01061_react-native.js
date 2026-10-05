// === Module 1061: react-native ===

// Module 1061 (react-native)
import react_native from "react-native" /* 17 */;
import _mod878 from "module_878" /* 878 */;

const Platform = react_native.Platform;

export const shouldEnableNativeNagger = function shouldEnableNativeNagger(enableNativeNagger) {
  let tmp = enableNativeNagger;
  if (typeof enableNativeNagger !== "boolean") {
    const obj = _mod878;
    tmp = !obj.isExpoGo();
  }
  return tmp;
};