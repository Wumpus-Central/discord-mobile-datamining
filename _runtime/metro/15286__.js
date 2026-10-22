// === Module 15286: ? ===

// Module 15286
import _mod15280 from "module_15280" /* 15280 */;
import _mod15281 from "module_15281" /* 15281 */;
import _mod15282 from "module_15282" /* 15282 */;
import _mod15283 from "module_15283" /* 15283 */;
import _mod15284 from "module_15284" /* 15284 */;
import _mod15285 from "module_15285" /* 15285 */;


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
      let tmp13 = _mod15282;
      let tmp13Result = tmp13(version, version2, arg3);
      return tmp13Result;
    case "=":
      tmp13 = _mod15282;
      tmp13Result = tmp13(version, version2, arg3);
      return tmp13Result;
    case "==":
      tmp13 = _mod15282;
      tmp13Result = tmp13(version, version2, arg3);
      return tmp13Result;
    case "!=":
      return _mod15283(version, version2, arg3);
    case ">":
      return _mod15280(version, version2, arg3);
    case ">=":
      return _mod15284(version, version2, arg3);
    case "<":
      return _mod15281(version, version2, arg3);
    case "<=":
      return _mod15285(version, version2, arg3);
    default:
      const _TypeError = TypeError;
      const _HermesInternal = HermesInternal;
      const typeError = new TypeError("Invalid operator: " + arg1);
      throw typeError;
  }
};