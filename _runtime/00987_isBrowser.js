// _runtime/00987_isBrowser.js
import { dynamicRequire } from "00988_dynamicRequire.js";
const require = arg1;
const dependencyMap = arg6;
Object.defineProperty(arg5, Symbol.toStringTag, { value: "Module" });
arg5.isBrowser = function isBrowser() {
  let tmp = typeof window !== "undefined";
  if (typeof window !== "undefined") {
    const isNodeEnvResult = dynamicRequire /* dynamicRequire */.isNodeEnv();
    let tmp4 = !isNodeEnvResult;
    if (isNodeEnvResult) {
      const _process = tmp5(821).GLOBAL_OBJ.process;
      let type;
      if (_process != null) {
        type = _process.type;
      }
      tmp4 = "renderer" === type;
    }
    tmp = tmp4;
    const obj = dynamicRequire /* dynamicRequire */;
    tmp5 = require;
  }
  return tmp;
};