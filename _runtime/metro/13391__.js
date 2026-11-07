// === Module 13391: ? ===

// Module 13391
import _mod13279 from "module_13279" /* 13279 */;
import _mod13392 from "module_13392" /* 13392 */;

require = arg1;
const dependencyMap = arg6;

export function isBrowser() {
  let tmp = typeof window !== "undefined";
  if (typeof window !== "undefined") {
    const isNodeEnvResult = _mod13392.isNodeEnv();
    let tmp3 = !isNodeEnvResult;
    if (isNodeEnvResult) {
      const _process = _mod13279.GLOBAL_OBJ.process;
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