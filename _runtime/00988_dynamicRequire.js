// _runtime/00988_dynamicRequire.js
import { getSDKSource } from "00989_getSDKSource.js";
const require = arg1;
let dependencyMap = arg4;
dependencyMap = arg6;
function dynamicRequire(require) {
  return require.require(arg1);
}
Object.defineProperty(arg5, Symbol.toStringTag, { value: "Module" });
arg5.isNodeEnv = function isNodeEnv() {
  const isBrowserBundleResult = getSDKSource.isBrowserBundle();
  if (isBrowserBundleResult) {
    return !isBrowserBundleResult;
  } else {
    const _Object = Object;
    const call = toString.call;
    const _process = process;
    let str = 0;
    if (typeof process !== "undefined") {
      str = process;
    }
    str = "[object process]";
    const tmp3 = typeof call === "unknown" ? toString() : call(str);
  }
};
arg5.loadModule = function loadModule(arg0) {
  let tmp = arg1;
  if (arg1 === undefined) {
    tmp = dependencyMap;
  }
  try {
    let tmp3 = dynamicRequire(tmp, arg0);
    if (!tmp3) {
      try {
        const _HermesInternal = HermesInternal;
        tmp3 = dynamicRequire(tmp, "" + dynamicRequire(tmp, "process").cwd() + "/node_modules/" + arg0);
      } catch (err) {
      }
    }
    return tmp3;
  } catch (err) {
  }
};