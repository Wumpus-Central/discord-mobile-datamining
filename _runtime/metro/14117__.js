// === Module 14117: ? ===

// Module 14117
import _mod14111 from "module_14111" /* 14111 */;
import _mod14112 from "module_14112" /* 14112 */;
import _mod14113 from "module_14113" /* 14113 */;
import _mod14114 from "module_14114" /* 14114 */;
import _mod14115 from "module_14115" /* 14115 */;
import _mod14116 from "module_14116" /* 14116 */;


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
      let tmp13 = _mod14113;
      let tmp13Result = tmp13(version, version2, arg3);
      return tmp13Result;
    case "=":
      tmp13 = _mod14113;
      tmp13Result = tmp13(version, version2, arg3);
      return tmp13Result;
    case "==":
      tmp13 = _mod14113;
      tmp13Result = tmp13(version, version2, arg3);
      return tmp13Result;
    case "!=":
      return _mod14114(version, version2, arg3);
    case ">":
      return _mod14111(version, version2, arg3);
    case ">=":
      return _mod14115(version, version2, arg3);
    case "<":
      return _mod14112(version, version2, arg3);
    case "<=":
      return _mod14116(version, version2, arg3);
    default:
      const _TypeError = TypeError;
      const _HermesInternal = HermesInternal;
      const typeError = new TypeError("Invalid operator: " + arg1);
      throw typeError;
  }
};