// === Module 12910: ? ===

// Module 12910
import _mod12798 from "module_12798" /* 12798 */;
import _mod12911 from "module_12911" /* 12911 */;

require = arg1;
const dependencyMap = arg6;

export const isBrowser = function isBrowser() {
  let tmp = typeof window !== "undefined";
  if (typeof window !== "undefined") {
    const isNodeEnvResult = _mod12911.isNodeEnv();
    let tmp3 = !isNodeEnvResult;
    if (isNodeEnvResult) {
      const _process = _mod12798.GLOBAL_OBJ.process;
      let tmp2 = _process;
      if (tmp2) {
        tmp2 = "renderer" === _process.type;
      }
      tmp3 = tmp2;
    }
    tmp = tmp3;
  }
  return tmp;
};