// === Module 14042: ? ===

// Module 14042
import _mod14036 from "module_14036" /* 14036 */;
import _mod14037 from "module_14037" /* 14037 */;
import _mod14038 from "module_14038" /* 14038 */;
import _mod14039 from "module_14039" /* 14039 */;
import _mod14040 from "module_14040" /* 14040 */;
import _mod14041 from "module_14041" /* 14041 */;


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
      let tmp13 = _mod14038;
      let tmp13Result = tmp13(version, version2, arg3);
      return tmp13Result;
    case "=":
      tmp13 = _mod14038;
      tmp13Result = tmp13(version, version2, arg3);
      return tmp13Result;
    case "==":
      tmp13 = _mod14038;
      tmp13Result = tmp13(version, version2, arg3);
      return tmp13Result;
    case "!=":
      return _mod14039(version, version2, arg3);
    case ">":
      return _mod14036(version, version2, arg3);
    case ">=":
      return _mod14040(version, version2, arg3);
    case "<":
      return _mod14037(version, version2, arg3);
    case "<=":
      return _mod14041(version, version2, arg3);
    default:
      const _TypeError = TypeError;
      const _HermesInternal = HermesInternal;
      const typeError = new TypeError("Invalid operator: " + arg1);
      throw typeError;
  }
};