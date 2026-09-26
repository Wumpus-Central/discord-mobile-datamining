// === Module 12426: ? ===

// Module 12426
import _mod12314 from "module_12314" /* 12314 */;
import _mod12427 from "module_12427" /* 12427 */;

require = arg1;
const dependencyMap = arg6;

export const isBrowser = function isBrowser() {
  let tmp = typeof window !== "undefined";
  if (typeof window !== "undefined") {
    const isNodeEnvResult = _mod12427.isNodeEnv();
    let tmp3 = !isNodeEnvResult;
    if (isNodeEnvResult) {
      const _process = _mod12314.GLOBAL_OBJ.process;
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