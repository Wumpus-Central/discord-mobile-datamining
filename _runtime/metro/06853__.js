// === Module 6853: ? ===

// Module 6853
import _mod17 from "module_17" /* 17 */;

const Platform = _mod17.Platform;

export const isNewArch = function isNewArch() {
  if (undefined !== c1) {
    return c1;
  } else {
    try {
      let prop;
      if (global != null) {
        prop = global.nativeFabricUIManager;
      }
      let flag = Boolean(prop);
      if (global != null) {
        const __turboModuleProxy = global.__turboModuleProxy;
      }
      if (!flag) {
        flag = Boolean(__turboModuleProxy);
      }
      if (!flag) {
        flag = false;
      }
      c1 = flag;
      return c1;
    } catch (err) {
      c1 = true;
    }
  }
};