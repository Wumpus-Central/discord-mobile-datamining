// === Module 13568: ? ===

// Module 13568
import _mod13562 from "module_13562" /* 13562 */;
import _mod13563 from "module_13563" /* 13563 */;
import _mod13564 from "module_13564" /* 13564 */;
import _mod13565 from "module_13565" /* 13565 */;
import _mod13566 from "module_13566" /* 13566 */;
import _mod13567 from "module_13567" /* 13567 */;


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
      let tmp13 = _mod13564;
      let tmp13Result = tmp13(version, version2, arg3);
      return tmp13Result;
    case "=":
      tmp13 = _mod13564;
      tmp13Result = tmp13(version, version2, arg3);
      return tmp13Result;
    case "==":
      tmp13 = _mod13564;
      tmp13Result = tmp13(version, version2, arg3);
      return tmp13Result;
    case "!=":
      return _mod13565(version, version2, arg3);
    case ">":
      return _mod13562(version, version2, arg3);
    case ">=":
      return _mod13566(version, version2, arg3);
    case "<":
      return _mod13563(version, version2, arg3);
    case "<=":
      return _mod13567(version, version2, arg3);
    default:
      const _TypeError = TypeError;
      const _HermesInternal = HermesInternal;
      const typeError = new TypeError("Invalid operator: " + arg1);
      throw typeError;
  }
};