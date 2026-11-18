// === Module 15263: ? ===

// Module 15263
import _mod15257 from "module_15257" /* 15257 */;
import _mod15258 from "module_15258" /* 15258 */;
import _mod15259 from "module_15259" /* 15259 */;
import _mod15260 from "module_15260" /* 15260 */;
import _mod15261 from "module_15261" /* 15261 */;
import _mod15262 from "module_15262" /* 15262 */;


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
      let tmp13 = _mod15259;
      let tmp13Result = tmp13(version, version2, arg3);
      return tmp13Result;
    case "=":
      tmp13 = _mod15259;
      tmp13Result = tmp13(version, version2, arg3);
      return tmp13Result;
    case "==":
      tmp13 = _mod15259;
      tmp13Result = tmp13(version, version2, arg3);
      return tmp13Result;
    case "!=":
      return _mod15260(version, version2, arg3);
    case ">":
      return _mod15257(version, version2, arg3);
    case ">=":
      return _mod15261(version, version2, arg3);
    case "<":
      return _mod15258(version, version2, arg3);
    case "<=":
      return _mod15262(version, version2, arg3);
    default:
      const _TypeError = TypeError;
      const _HermesInternal = HermesInternal;
      const typeError = new TypeError("Invalid operator: " + arg1);
      throw typeError;
  }
};