// === Module 15151: ? ===

// Module 15151
import _mod15145 from "module_15145" /* 15145 */;
import _mod15146 from "module_15146" /* 15146 */;
import _mod15147 from "module_15147" /* 15147 */;
import _mod15148 from "module_15148" /* 15148 */;
import _mod15149 from "module_15149" /* 15149 */;
import _mod15150 from "module_15150" /* 15150 */;


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
      let tmp13 = _mod15147;
      let tmp13Result = tmp13(version, version2, arg3);
      return tmp13Result;
    case "=":
      tmp13 = _mod15147;
      tmp13Result = tmp13(version, version2, arg3);
      return tmp13Result;
    case "==":
      tmp13 = _mod15147;
      tmp13Result = tmp13(version, version2, arg3);
      return tmp13Result;
    case "!=":
      return _mod15148(version, version2, arg3);
    case ">":
      return _mod15145(version, version2, arg3);
    case ">=":
      return _mod15149(version, version2, arg3);
    case "<":
      return _mod15146(version, version2, arg3);
    case "<=":
      return _mod15150(version, version2, arg3);
    default:
      const _TypeError = TypeError;
      const _HermesInternal = HermesInternal;
      const typeError = new TypeError("Invalid operator: " + arg1);
      throw typeError;
  }
};