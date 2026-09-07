// === Module 14045: ? ===

// Module 14045
import _mod14039 from "module_14039" /* 14039 */;
import _mod14040 from "module_14040" /* 14040 */;
import _mod14041 from "module_14041" /* 14041 */;
import _mod14042 from "module_14042" /* 14042 */;
import _mod14043 from "module_14043" /* 14043 */;
import _mod14044 from "module_14044" /* 14044 */;


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
      let tmp13 = _mod14041;
      let tmp13Result = tmp13(version, version2, arg3);
      return tmp13Result;
    case "=":
      tmp13 = _mod14041;
      tmp13Result = tmp13(version, version2, arg3);
      return tmp13Result;
    case "==":
      tmp13 = _mod14041;
      tmp13Result = tmp13(version, version2, arg3);
      return tmp13Result;
    case "!=":
      return _mod14042(version, version2, arg3);
    case ">":
      return _mod14039(version, version2, arg3);
    case ">=":
      return _mod14043(version, version2, arg3);
    case "<":
      return _mod14040(version, version2, arg3);
    case "<=":
      return _mod14044(version, version2, arg3);
    default:
      const _TypeError = TypeError;
      const _HermesInternal = HermesInternal;
      const typeError = new TypeError("Invalid operator: " + arg1);
      throw typeError;
  }
};