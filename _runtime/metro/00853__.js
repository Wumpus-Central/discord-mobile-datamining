// === Module 853: ? ===

// Module 853
import _mod854 from "module_854" /* 854 */;

require = arg1;
const module = arg4;
const dependencyMap = arg6;
function dynamicRequire(module, process) {
  return module.require(process);
}
Object.defineProperty(arg5, Symbol.toStringTag, { value: "Module" });

export function isNodeEnv() {
  const isBrowserBundleResult = _mod854.isBrowserBundle();
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
}
export function loadModule(process) {
  let tmp = module;
  if (module === undefined) {
    tmp = module;
  }
  try {
    let tmp3 = dynamicRequire(tmp, process);
    if (!tmp3) {
      try {
        const _HermesInternal = HermesInternal;
        tmp3 = dynamicRequire(tmp, "" + dynamicRequire(tmp, "process").cwd() + "/node_modules/" + process);
      } catch (err) {
      }
    }
    return tmp3;
  } catch (err) {
  }
}