// === Module 15213: ? ===

// Module 15213
import _mod15207 from "module_15207" /* 15207 */;
import _mod15208 from "module_15208" /* 15208 */;
import _mod15209 from "module_15209" /* 15209 */;
import _mod15210 from "module_15210" /* 15210 */;
import _mod15211 from "module_15211" /* 15211 */;
import _mod15212 from "module_15212" /* 15212 */;


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
      let tmp13 = _mod15209;
      let tmp13Result = tmp13(version, version2, arg3);
      return tmp13Result;
    case "=":
      tmp13 = _mod15209;
      tmp13Result = tmp13(version, version2, arg3);
      return tmp13Result;
    case "==":
      tmp13 = _mod15209;
      tmp13Result = tmp13(version, version2, arg3);
      return tmp13Result;
    case "!=":
      return _mod15210(version, version2, arg3);
    case ">":
      return _mod15207(version, version2, arg3);
    case ">=":
      return _mod15211(version, version2, arg3);
    case "<":
      return _mod15208(version, version2, arg3);
    case "<=":
      return _mod15212(version, version2, arg3);
    default:
      const _TypeError = TypeError;
      const _HermesInternal = HermesInternal;
      const typeError = new TypeError("Invalid operator: " + arg1);
      throw typeError;
  }
};