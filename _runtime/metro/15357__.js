// === Module 15357: ? ===

// Module 15357
import _mod15351 from "module_15351" /* 15351 */;
import _mod15352 from "module_15352" /* 15352 */;
import _mod15353 from "module_15353" /* 15353 */;
import _mod15354 from "module_15354" /* 15354 */;
import _mod15355 from "module_15355" /* 15355 */;
import _mod15356 from "module_15356" /* 15356 */;


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
      let tmp13 = _mod15353;
      let tmp13Result = tmp13(version, version2, arg3);
      return tmp13Result;
    case "=":
      tmp13 = _mod15353;
      tmp13Result = tmp13(version, version2, arg3);
      return tmp13Result;
    case "==":
      tmp13 = _mod15353;
      tmp13Result = tmp13(version, version2, arg3);
      return tmp13Result;
    case "!=":
      return _mod15354(version, version2, arg3);
    case ">":
      return _mod15351(version, version2, arg3);
    case ">=":
      return _mod15355(version, version2, arg3);
    case "<":
      return _mod15352(version, version2, arg3);
    case "<=":
      return _mod15356(version, version2, arg3);
    default:
      const _TypeError = TypeError;
      const _HermesInternal = HermesInternal;
      const typeError = new TypeError("Invalid operator: " + arg1);
      throw typeError;
  }
};