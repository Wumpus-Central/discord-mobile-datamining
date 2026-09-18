// === Module 14250: ? ===

// Module 14250
import _mod14244 from "module_14244" /* 14244 */;
import _mod14245 from "module_14245" /* 14245 */;
import _mod14246 from "module_14246" /* 14246 */;
import _mod14247 from "module_14247" /* 14247 */;
import _mod14248 from "module_14248" /* 14248 */;
import _mod14249 from "module_14249" /* 14249 */;


export default (version, arg1, version2, arg3) => {
  switch (arg1) {
    case "===":
      let version3 = version;
      if (typeof version === "object") {
        version3 = version.version;
      }
      let version4 = version2;
      if (typeof version2 === "object") {
        version4 = version2.version;
      }
      return version3 === version4;
    case "!==":
      if (typeof version === "object") {
        version = version.version;
      }
      if (typeof version2 === "object") {
        version2 = version2.version;
      }
      return version !== version2;
    case "":
      let tmp13 = _mod14246;
      let tmp13Result = tmp13(version, version2, arg3);
      return tmp13Result;
    case "=":
      tmp13 = _mod14246;
      tmp13Result = tmp13(version, version2, arg3);
      return tmp13Result;
    case "==":
      tmp13 = _mod14246;
      tmp13Result = tmp13(version, version2, arg3);
      return tmp13Result;
    case "!=":
      return _mod14247(version, version2, arg3);
    case ">":
      return _mod14244(version, version2, arg3);
    case ">=":
      return _mod14248(version, version2, arg3);
    case "<":
      return _mod14245(version, version2, arg3);
    case "<=":
      return _mod14249(version, version2, arg3);
    default:
      const _TypeError = TypeError;
      const _HermesInternal = HermesInternal;
      const typeError = new TypeError("Invalid operator: " + arg1);
      throw typeError;
  }
};