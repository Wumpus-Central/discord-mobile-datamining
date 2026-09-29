// === Module 13754: ? ===

// Module 13754
import _mod13748 from "module_13748" /* 13748 */;
import _mod13749 from "module_13749" /* 13749 */;
import _mod13750 from "module_13750" /* 13750 */;
import _mod13751 from "module_13751" /* 13751 */;
import _mod13752 from "module_13752" /* 13752 */;
import _mod13753 from "module_13753" /* 13753 */;


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
      let tmp13 = _mod13750;
      let tmp13Result = tmp13(version, version2, arg3);
      return tmp13Result;
    case "=":
      tmp13 = _mod13750;
      tmp13Result = tmp13(version, version2, arg3);
      return tmp13Result;
    case "==":
      tmp13 = _mod13750;
      tmp13Result = tmp13(version, version2, arg3);
      return tmp13Result;
    case "!=":
      return _mod13751(version, version2, arg3);
    case ">":
      return _mod13748(version, version2, arg3);
    case ">=":
      return _mod13752(version, version2, arg3);
    case "<":
      return _mod13749(version, version2, arg3);
    case "<=":
      return _mod13753(version, version2, arg3);
    default:
      const _TypeError = TypeError;
      const _HermesInternal = HermesInternal;
      const typeError = new TypeError("Invalid operator: " + arg1);
      throw typeError;
  }
};