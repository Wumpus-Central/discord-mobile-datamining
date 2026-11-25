// === Module 15479: ? ===

// Module 15479
import _mod15473 from "module_15473" /* 15473 */;
import _mod15474 from "module_15474" /* 15474 */;
import _mod15475 from "module_15475" /* 15475 */;
import _mod15476 from "module_15476" /* 15476 */;
import _mod15477 from "module_15477" /* 15477 */;
import _mod15478 from "module_15478" /* 15478 */;


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
      let tmp13 = _mod15475;
      let tmp13Result = tmp13(version, version2, arg3);
      return tmp13Result;
    case "=":
      tmp13 = _mod15475;
      tmp13Result = tmp13(version, version2, arg3);
      return tmp13Result;
    case "==":
      tmp13 = _mod15475;
      tmp13Result = tmp13(version, version2, arg3);
      return tmp13Result;
    case "!=":
      return _mod15476(version, version2, arg3);
    case ">":
      return _mod15473(version, version2, arg3);
    case ">=":
      return _mod15477(version, version2, arg3);
    case "<":
      return _mod15474(version, version2, arg3);
    case "<=":
      return _mod15478(version, version2, arg3);
    default:
      const _TypeError = TypeError;
      const _HermesInternal = HermesInternal;
      const typeError = new TypeError("Invalid operator: " + arg1);
      throw typeError;
  }
};