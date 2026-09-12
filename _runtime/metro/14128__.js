// === Module 14128: ? ===

// Module 14128
import _mod14122 from "module_14122" /* 14122 */;
import _mod14123 from "module_14123" /* 14123 */;
import _mod14124 from "module_14124" /* 14124 */;
import _mod14125 from "module_14125" /* 14125 */;
import _mod14126 from "module_14126" /* 14126 */;
import _mod14127 from "module_14127" /* 14127 */;


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
      let tmp13 = _mod14124;
      let tmp13Result = tmp13(version, version2, arg3);
      return tmp13Result;
    case "=":
      tmp13 = _mod14124;
      tmp13Result = tmp13(version, version2, arg3);
      return tmp13Result;
    case "==":
      tmp13 = _mod14124;
      tmp13Result = tmp13(version, version2, arg3);
      return tmp13Result;
    case "!=":
      return _mod14125(version, version2, arg3);
    case ">":
      return _mod14122(version, version2, arg3);
    case ">=":
      return _mod14126(version, version2, arg3);
    case "<":
      return _mod14123(version, version2, arg3);
    case "<=":
      return _mod14127(version, version2, arg3);
    default:
      const _TypeError = TypeError;
      const _HermesInternal = HermesInternal;
      const typeError = new TypeError("Invalid operator: " + arg1);
      throw typeError;
  }
};