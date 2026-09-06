// === Module 852: isBrowser ===

// Module 852 (isBrowser)
import dynamicRequire from "dynamicRequire" /* 853 */;

require = arg1;
const dependencyMap = arg6;
Object.defineProperty(arg5, Symbol.toStringTag, { value: "Module" });
arg5.isBrowser = function isBrowser() {
  let tmp = typeof window !== "undefined";
  if (typeof window !== "undefined") {
    const isNodeEnvResult = dynamicRequire.isNodeEnv();
    let tmp4 = !isNodeEnvResult;
    if (isNodeEnvResult) {
      const _process = tmp5(686).GLOBAL_OBJ.process;
      let type;
      if (_process != null) {
        type = _process.type;
      }
      tmp4 = "renderer" === type;
    }
    tmp = tmp4;
    const obj = dynamicRequire;
    tmp5 = require;
  }
  return tmp;
};