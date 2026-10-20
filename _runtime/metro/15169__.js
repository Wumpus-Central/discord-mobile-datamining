// === Module 15169: ? ===

// Module 15169
import _mod15163 from "module_15163" /* 15163 */;
import _mod15164 from "module_15164" /* 15164 */;
import _mod15165 from "module_15165" /* 15165 */;
import _mod15166 from "module_15166" /* 15166 */;
import _mod15167 from "module_15167" /* 15167 */;
import _mod15168 from "module_15168" /* 15168 */;


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
      let tmp13 = _mod15165;
      let tmp13Result = tmp13(version, version2, arg3);
      return tmp13Result;
    case "=":
      tmp13 = _mod15165;
      tmp13Result = tmp13(version, version2, arg3);
      return tmp13Result;
    case "==":
      tmp13 = _mod15165;
      tmp13Result = tmp13(version, version2, arg3);
      return tmp13Result;
    case "!=":
      return _mod15166(version, version2, arg3);
    case ">":
      return _mod15163(version, version2, arg3);
    case ">=":
      return _mod15167(version, version2, arg3);
    case "<":
      return _mod15164(version, version2, arg3);
    case "<=":
      return _mod15168(version, version2, arg3);
    default:
      const _TypeError = TypeError;
      const _HermesInternal = HermesInternal;
      const typeError = new TypeError("Invalid operator: " + arg1);
      throw typeError;
  }
};