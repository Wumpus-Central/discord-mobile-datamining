// === Module 15926: ? ===

// Module 15926
import _mod15920 from "module_15920" /* 15920 */;
import _mod15921 from "module_15921" /* 15921 */;
import _mod15922 from "module_15922" /* 15922 */;
import _mod15923 from "module_15923" /* 15923 */;
import _mod15924 from "module_15924" /* 15924 */;
import _mod15925 from "module_15925" /* 15925 */;


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
      let tmp13 = _mod15922;
      let tmp13Result = tmp13(version, version2, arg3);
      return tmp13Result;
    case "=":
      tmp13 = _mod15922;
      tmp13Result = tmp13(version, version2, arg3);
      return tmp13Result;
    case "==":
      tmp13 = _mod15922;
      tmp13Result = tmp13(version, version2, arg3);
      return tmp13Result;
    case "!=":
      return _mod15923(version, version2, arg3);
    case ">":
      return _mod15920(version, version2, arg3);
    case ">=":
      return _mod15924(version, version2, arg3);
    case "<":
      return _mod15921(version, version2, arg3);
    case "<=":
      return _mod15925(version, version2, arg3);
    default:
      const _TypeError = TypeError;
      const _HermesInternal = HermesInternal;
      const typeError = new TypeError("Invalid operator: " + arg1);
      throw typeError;
  }
};