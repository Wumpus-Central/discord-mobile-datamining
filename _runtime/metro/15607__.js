// === Module 15607: ? ===

// Module 15607
import _mod15601 from "module_15601" /* 15601 */;
import _mod15602 from "module_15602" /* 15602 */;
import _mod15603 from "module_15603" /* 15603 */;
import _mod15604 from "module_15604" /* 15604 */;
import _mod15605 from "module_15605" /* 15605 */;
import _mod15606 from "module_15606" /* 15606 */;


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
      let tmp13 = _mod15603;
      let tmp13Result = tmp13(version, version2, arg3);
      return tmp13Result;
    case "=":
      tmp13 = _mod15603;
      tmp13Result = tmp13(version, version2, arg3);
      return tmp13Result;
    case "==":
      tmp13 = _mod15603;
      tmp13Result = tmp13(version, version2, arg3);
      return tmp13Result;
    case "!=":
      return _mod15604(version, version2, arg3);
    case ">":
      return _mod15601(version, version2, arg3);
    case ">=":
      return _mod15605(version, version2, arg3);
    case "<":
      return _mod15602(version, version2, arg3);
    case "<=":
      return _mod15606(version, version2, arg3);
    default:
      const _TypeError = TypeError;
      const _HermesInternal = HermesInternal;
      const typeError = new TypeError("Invalid operator: " + arg1);
      throw typeError;
  }
};