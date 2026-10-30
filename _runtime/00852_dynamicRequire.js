// === Module 852: dynamicRequire ===

// Module 852 (dynamicRequire)
import _mod685 from "module_685" /* 685 */;
import _mod853 from "module_853" /* 853 */;

require = arg1;
const dependencyMap = arg6;
Object.defineProperty(arg5, Symbol.toStringTag, { value: "Module" });

export function isBrowser() {
  let tmp = typeof window !== "undefined";
  if (typeof window !== "undefined") {
    const isNodeEnvResult = _mod853.isNodeEnv();
    let tmp4 = !isNodeEnvResult;
    if (isNodeEnvResult) {
      const _process = _mod685.GLOBAL_OBJ.process;
      let type;
      if (_process != null) {
        type = _process.type;
      }
      tmp4 = "renderer" === type;
    }
    tmp = tmp4;
  }
  return tmp;
}