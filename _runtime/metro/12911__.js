// _runtime/metro/12911__.js
import _mod12912 from "12912__.js";

require = arg1;
const module = arg4;
const dependencyMap = arg6;
function dynamicRequire(require, arg1) {
  return require.require(arg1);
}

export { dynamicRequire };
export const isNodeEnv = function isNodeEnv() {
  const isBrowserBundleResult = _mod12912.isBrowserBundle();
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
export const loadModule = function loadModule(arg0) {
  let tmp = arg1;
  if (arg1 === undefined) {
    tmp = module;
  }
  try {
    let tmp3 = dynamicRequire(tmp, arg0);
    if (!tmp3) {
      try {
        const _HermesInternal = HermesInternal;
        tmp3 = dynamicRequire(tmp, "" + dynamicRequire(tmp, "process").cwd() + "/node_modules/" + arg0);
      } catch (err) {}
    }
    return tmp3;
  } catch (err) {}
};
