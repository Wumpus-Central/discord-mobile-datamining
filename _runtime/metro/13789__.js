// === Module 13789: ? ===

// Module 13789
import _mod13783 from "module_13783" /* 13783 */;
import _mod13784 from "module_13784" /* 13784 */;
import _mod13785 from "module_13785" /* 13785 */;
import _mod13786 from "module_13786" /* 13786 */;
import _mod13787 from "module_13787" /* 13787 */;
import _mod13788 from "module_13788" /* 13788 */;


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
      let tmp13 = _mod13785;
      let tmp13Result = tmp13(version, version2, arg3);
      return tmp13Result;
    case "=":
      tmp13 = _mod13785;
      tmp13Result = tmp13(version, version2, arg3);
      return tmp13Result;
    case "==":
      tmp13 = _mod13785;
      tmp13Result = tmp13(version, version2, arg3);
      return tmp13Result;
    case "!=":
      return _mod13786(version, version2, arg3);
    case ">":
      return _mod13783(version, version2, arg3);
    case ">=":
      return _mod13787(version, version2, arg3);
    case "<":
      return _mod13784(version, version2, arg3);
    case "<=":
      return _mod13788(version, version2, arg3);
    default:
      const _TypeError = TypeError;
      const _HermesInternal = HermesInternal;
      const typeError = new TypeError("Invalid operator: " + arg1);
      throw typeError;
  }
};