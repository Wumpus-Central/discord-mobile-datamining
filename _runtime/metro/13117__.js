// === Module 13117: ? ===

// Module 13117
import _mod13005 from "module_13005" /* 13005 */;
import _mod13118 from "module_13118" /* 13118 */;

require = arg1;
const dependencyMap = arg6;

export function isBrowser() {
  let tmp = typeof window !== "undefined";
  if (typeof window !== "undefined") {
    const isNodeEnvResult = _mod13118.isNodeEnv();
    let tmp3 = !isNodeEnvResult;
    if (isNodeEnvResult) {
      const _process = _mod13005.GLOBAL_OBJ.process;
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