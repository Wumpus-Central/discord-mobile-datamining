// === Module 16265: ? ===

// Module 16265
import _mod16259 from "module_16259" /* 16259 */;
import _mod16260 from "module_16260" /* 16260 */;
import _mod16261 from "module_16261" /* 16261 */;
import _mod16262 from "module_16262" /* 16262 */;
import _mod16263 from "module_16263" /* 16263 */;
import _mod16264 from "module_16264" /* 16264 */;


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
      let tmp13 = _mod16261;
      let tmp13Result = tmp13(version, version2, arg3);
      return tmp13Result;
    case "=":
      tmp13 = _mod16261;
      tmp13Result = tmp13(version, version2, arg3);
      return tmp13Result;
    case "==":
      tmp13 = _mod16261;
      tmp13Result = tmp13(version, version2, arg3);
      return tmp13Result;
    case "!=":
      return _mod16262(version, version2, arg3);
    case ">":
      return _mod16259(version, version2, arg3);
    case ">=":
      return _mod16263(version, version2, arg3);
    case "<":
      return _mod16260(version, version2, arg3);
    case "<=":
      return _mod16264(version, version2, arg3);
    default:
      const _TypeError = TypeError;
      const _HermesInternal = HermesInternal;
      const typeError = new TypeError("Invalid operator: " + arg1);
      throw typeError;
  }
};