// === Module 6338: react-native ===

// Module 6338 (react-native)
import react_native from "react-native" /* 17 */;

let c1;

const Platform = react_native.Platform;

export const isNewArch = function isNewArch() {
  if (undefined !== c1) {
    return c1;
  } else {
    try {
      let __turboModuleProxy;
      let prop;
      const _Boolean = Boolean;
      if (global != null) {
        prop = global.nativeFabricUIManager;
      }
      let flag = _Boolean(prop);
      const _Boolean2 = Boolean;
      if (global != null) {
        __turboModuleProxy = global.__turboModuleProxy;
      }
      if (!flag) {
        flag = _Boolean2(__turboModuleProxy);
      }
      if (!flag) {
        flag = false;
      }
      c1 = flag;
    } catch (err) {
      c1 = true;
    }
    return c1;
  }
};