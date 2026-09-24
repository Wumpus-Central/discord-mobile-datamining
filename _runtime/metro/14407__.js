// === Module 14407: ? ===

// Module 14407
import _mod14401 from "module_14401" /* 14401 */;
import _mod14402 from "module_14402" /* 14402 */;
import _mod14403 from "module_14403" /* 14403 */;
import _mod14404 from "module_14404" /* 14404 */;
import _mod14405 from "module_14405" /* 14405 */;
import _mod14406 from "module_14406" /* 14406 */;


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
      let tmp13 = _mod14403;
      let tmp13Result = tmp13(version, version2, arg3);
      return tmp13Result;
    case "=":
      tmp13 = _mod14403;
      tmp13Result = tmp13(version, version2, arg3);
      return tmp13Result;
    case "==":
      tmp13 = _mod14403;
      tmp13Result = tmp13(version, version2, arg3);
      return tmp13Result;
    case "!=":
      return _mod14404(version, version2, arg3);
    case ">":
      return _mod14401(version, version2, arg3);
    case ">=":
      return _mod14405(version, version2, arg3);
    case "<":
      return _mod14402(version, version2, arg3);
    case "<=":
      return _mod14406(version, version2, arg3);
    default:
      const _TypeError = TypeError;
      const _HermesInternal = HermesInternal;
      const typeError = new TypeError("Invalid operator: " + arg1);
      throw typeError;
  }
};