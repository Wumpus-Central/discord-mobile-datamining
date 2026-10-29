// === Module 15842: ? ===

// Module 15842
import _mod15836 from "module_15836" /* 15836 */;
import _mod15837 from "module_15837" /* 15837 */;
import _mod15838 from "module_15838" /* 15838 */;
import _mod15839 from "module_15839" /* 15839 */;
import _mod15840 from "module_15840" /* 15840 */;
import _mod15841 from "module_15841" /* 15841 */;


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
      let tmp13 = _mod15838;
      let tmp13Result = tmp13(version, version2, arg3);
      return tmp13Result;
    case "=":
      tmp13 = _mod15838;
      tmp13Result = tmp13(version, version2, arg3);
      return tmp13Result;
    case "==":
      tmp13 = _mod15838;
      tmp13Result = tmp13(version, version2, arg3);
      return tmp13Result;
    case "!=":
      return _mod15839(version, version2, arg3);
    case ">":
      return _mod15836(version, version2, arg3);
    case ">=":
      return _mod15840(version, version2, arg3);
    case "<":
      return _mod15837(version, version2, arg3);
    case "<=":
      return _mod15841(version, version2, arg3);
    default:
      const _TypeError = TypeError;
      const _HermesInternal = HermesInternal;
      const typeError = new TypeError("Invalid operator: " + arg1);
      throw typeError;
  }
};