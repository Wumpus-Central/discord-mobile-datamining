// _runtime/06853_isNewArch.js
import get_ActivityIndicator from "00017_get_ActivityIndicator.js";

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
