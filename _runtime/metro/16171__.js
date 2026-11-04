// === Module 16171: ? ===

// Module 16171
import _mod16165 from "module_16165" /* 16165 */;
import _mod16166 from "module_16166" /* 16166 */;
import _mod16167 from "module_16167" /* 16167 */;
import _mod16168 from "module_16168" /* 16168 */;
import _mod16169 from "module_16169" /* 16169 */;
import _mod16170 from "module_16170" /* 16170 */;


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
      let tmp13 = _mod16167;
      let tmp13Result = tmp13(version, version2, arg3);
      return tmp13Result;
    case "=":
      tmp13 = _mod16167;
      tmp13Result = tmp13(version, version2, arg3);
      return tmp13Result;
    case "==":
      tmp13 = _mod16167;
      tmp13Result = tmp13(version, version2, arg3);
      return tmp13Result;
    case "!=":
      return _mod16168(version, version2, arg3);
    case ">":
      return _mod16165(version, version2, arg3);
    case ">=":
      return _mod16169(version, version2, arg3);
    case "<":
      return _mod16166(version, version2, arg3);
    case "<=":
      return _mod16170(version, version2, arg3);
    default:
      const _TypeError = TypeError;
      const _HermesInternal = HermesInternal;
      const typeError = new TypeError("Invalid operator: " + arg1);
      throw typeError;
  }
};