// === Module 9923: ? ===

// Module 9923
import _mod9811 from "module_9811" /* 9811 */;
import _mod9924 from "module_9924" /* 9924 */;

require = arg1;
const dependencyMap = arg6;

export function isBrowser() {
  let tmp = typeof window !== "undefined";
  if (typeof window !== "undefined") {
    const isNodeEnvResult = _mod9924.isNodeEnv();
    let tmp3 = !isNodeEnvResult;
    if (isNodeEnvResult) {
      const _process = _mod9811.GLOBAL_OBJ.process;
      let tmp2 = _process;
      if (tmp2) {
        tmp2 = "renderer" === _process.type;
      }
      tmp3 = tmp2;
    }
    tmp = tmp3;
  }
  return tmp;
}