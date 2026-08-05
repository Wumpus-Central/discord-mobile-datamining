// _runtime/07488_isBrowser.js
import { dynamicRequire } from "07489_dynamicRequire.js";
const require = arg1;
const dependencyMap = arg6;
arg5.isBrowser = function isBrowser() {
  let tmp = typeof window !== "undefined";
  if (typeof window !== "undefined") {
    const isNodeEnvResult = dynamicRequire /* dynamicRequire */.isNodeEnv();
    let tmp3 = !isNodeEnvResult;
    if (isNodeEnvResult) {
      const _process = tmp4(7376).GLOBAL_OBJ.process;
      let tmp2 = _process;
      if (tmp2) {
        tmp2 = "renderer" === _process.type;
      }
      tmp3 = tmp2;
    }
    tmp = tmp3;
    const obj = dynamicRequire /* dynamicRequire */;
    tmp4 = require;
  }
  return tmp;
};