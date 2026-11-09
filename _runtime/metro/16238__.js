// === Module 16238: ? ===

// Module 16238
import _mod16232 from "module_16232" /* 16232 */;
import _mod16233 from "module_16233" /* 16233 */;
import _mod16234 from "module_16234" /* 16234 */;
import _mod16235 from "module_16235" /* 16235 */;
import _mod16236 from "module_16236" /* 16236 */;
import _mod16237 from "module_16237" /* 16237 */;


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
      let tmp13 = _mod16234;
      let tmp13Result = tmp13(version, version2, arg3);
      return tmp13Result;
    case "=":
      tmp13 = _mod16234;
      tmp13Result = tmp13(version, version2, arg3);
      return tmp13Result;
    case "==":
      tmp13 = _mod16234;
      tmp13Result = tmp13(version, version2, arg3);
      return tmp13Result;
    case "!=":
      return _mod16235(version, version2, arg3);
    case ">":
      return _mod16232(version, version2, arg3);
    case ">=":
      return _mod16236(version, version2, arg3);
    case "<":
      return _mod16233(version, version2, arg3);
    case "<=":
      return _mod16237(version, version2, arg3);
    default:
      const _TypeError = TypeError;
      const _HermesInternal = HermesInternal;
      const typeError = new TypeError("Invalid operator: " + arg1);
      throw typeError;
  }
};