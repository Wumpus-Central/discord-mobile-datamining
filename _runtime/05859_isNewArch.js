// === Module 5859: isNewArch ===

// Module 5859 (isNewArch)
import get_ActivityIndicator from "get ActivityIndicator" /* 17 */;

const Platform = get_ActivityIndicator.Platform;

export const isNewArch = function isNewArch() {
  if (undefined !== c1) {
    return c1;
  } else {
    try {
      let prop;
      if (global != null) {
        prop = tmp2.nativeFabricUIManager;
      }
      let flag = Boolean(prop);
      if (global != null) {
        const __turboModuleProxy = tmp2.__turboModuleProxy;
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