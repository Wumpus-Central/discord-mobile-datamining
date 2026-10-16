// === Module 15040: ? ===

// Module 15040
import _mod15034 from "module_15034" /* 15034 */;
import _mod15035 from "module_15035" /* 15035 */;
import _mod15036 from "module_15036" /* 15036 */;
import _mod15037 from "module_15037" /* 15037 */;
import _mod15038 from "module_15038" /* 15038 */;
import _mod15039 from "module_15039" /* 15039 */;


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
      let tmp13 = _mod15036;
      let tmp13Result = tmp13(version, version2, arg3);
      return tmp13Result;
    case "=":
      tmp13 = _mod15036;
      tmp13Result = tmp13(version, version2, arg3);
      return tmp13Result;
    case "==":
      tmp13 = _mod15036;
      tmp13Result = tmp13(version, version2, arg3);
      return tmp13Result;
    case "!=":
      return _mod15037(version, version2, arg3);
    case ">":
      return _mod15034(version, version2, arg3);
    case ">=":
      return _mod15038(version, version2, arg3);
    case "<":
      return _mod15035(version, version2, arg3);
    case "<=":
      return _mod15039(version, version2, arg3);
    default:
      const _TypeError = TypeError;
      const _HermesInternal = HermesInternal;
      const typeError = new TypeError("Invalid operator: " + arg1);
      throw typeError;
  }
};