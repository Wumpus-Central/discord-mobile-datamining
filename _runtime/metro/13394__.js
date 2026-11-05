// === Module 13394: ? ===

// Module 13394
import _mod13282 from "module_13282" /* 13282 */;
import _mod13395 from "module_13395" /* 13395 */;

require = arg1;
const dependencyMap = arg6;

export function isBrowser() {
  let tmp = typeof window !== "undefined";
  if (typeof window !== "undefined") {
    const isNodeEnvResult = _mod13395.isNodeEnv();
    let tmp3 = !isNodeEnvResult;
    if (isNodeEnvResult) {
      const _process = _mod13282.GLOBAL_OBJ.process;
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