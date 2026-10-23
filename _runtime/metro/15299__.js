// === Module 15299: ? ===

// Module 15299
import _mod15293 from "module_15293" /* 15293 */;
import _mod15294 from "module_15294" /* 15294 */;
import _mod15295 from "module_15295" /* 15295 */;
import _mod15296 from "module_15296" /* 15296 */;
import _mod15297 from "module_15297" /* 15297 */;
import _mod15298 from "module_15298" /* 15298 */;


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
      let tmp13 = _mod15295;
      let tmp13Result = tmp13(version, version2, arg3);
      return tmp13Result;
    case "=":
      tmp13 = _mod15295;
      tmp13Result = tmp13(version, version2, arg3);
      return tmp13Result;
    case "==":
      tmp13 = _mod15295;
      tmp13Result = tmp13(version, version2, arg3);
      return tmp13Result;
    case "!=":
      return _mod15296(version, version2, arg3);
    case ">":
      return _mod15293(version, version2, arg3);
    case ">=":
      return _mod15297(version, version2, arg3);
    case "<":
      return _mod15294(version, version2, arg3);
    case "<=":
      return _mod15298(version, version2, arg3);
    default:
      const _TypeError = TypeError;
      const _HermesInternal = HermesInternal;
      const typeError = new TypeError("Invalid operator: " + arg1);
      throw typeError;
  }
};