// === Module 14317: ? ===

// Module 14317
import _mod14311 from "module_14311" /* 14311 */;
import _mod14312 from "module_14312" /* 14312 */;
import _mod14313 from "module_14313" /* 14313 */;
import _mod14314 from "module_14314" /* 14314 */;
import _mod14315 from "module_14315" /* 14315 */;
import _mod14316 from "module_14316" /* 14316 */;


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
      let tmp13 = _mod14313;
      let tmp13Result = tmp13(version, version2, arg3);
      return tmp13Result;
    case "=":
      tmp13 = _mod14313;
      tmp13Result = tmp13(version, version2, arg3);
      return tmp13Result;
    case "==":
      tmp13 = _mod14313;
      tmp13Result = tmp13(version, version2, arg3);
      return tmp13Result;
    case "!=":
      return _mod14314(version, version2, arg3);
    case ">":
      return _mod14311(version, version2, arg3);
    case ">=":
      return _mod14315(version, version2, arg3);
    case "<":
      return _mod14312(version, version2, arg3);
    case "<=":
      return _mod14316(version, version2, arg3);
    default:
      const _TypeError = TypeError;
      const _HermesInternal = HermesInternal;
      const typeError = new TypeError("Invalid operator: " + arg1);
      throw typeError;
  }
};