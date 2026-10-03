// === Module 863: dynamicRequire ===

// Module 863 (dynamicRequire)
import _mod697 from "module_697" /* 697 */;
import _mod864 from "module_864" /* 864 */;

require = arg1;
const dependencyMap = arg6;
Object.defineProperty(arg5, Symbol.toStringTag, { value: "Module" });

export const isBrowser = function isBrowser() {
  let tmp = typeof window !== "undefined";
  if (typeof window !== "undefined") {
    const isNodeEnvResult = _mod864.isNodeEnv();
    let tmp4 = !isNodeEnvResult;
    if (isNodeEnvResult) {
      const _process = _mod697.GLOBAL_OBJ.process;
      let type;
      if (_process != null) {
        type = _process.type;
      }
      tmp4 = "renderer" === type;
    }
    tmp = tmp4;
  }
  return tmp;
};