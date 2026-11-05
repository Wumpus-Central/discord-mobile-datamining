// === Module 16184: ? ===

// Module 16184
import _mod16178 from "module_16178" /* 16178 */;
import _mod16179 from "module_16179" /* 16179 */;
import _mod16180 from "module_16180" /* 16180 */;
import _mod16181 from "module_16181" /* 16181 */;
import _mod16182 from "module_16182" /* 16182 */;
import _mod16183 from "module_16183" /* 16183 */;


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
      let tmp13 = _mod16180;
      let tmp13Result = tmp13(version, version2, arg3);
      return tmp13Result;
    case "=":
      tmp13 = _mod16180;
      tmp13Result = tmp13(version, version2, arg3);
      return tmp13Result;
    case "==":
      tmp13 = _mod16180;
      tmp13Result = tmp13(version, version2, arg3);
      return tmp13Result;
    case "!=":
      return _mod16181(version, version2, arg3);
    case ">":
      return _mod16178(version, version2, arg3);
    case ">=":
      return _mod16182(version, version2, arg3);
    case "<":
      return _mod16179(version, version2, arg3);
    case "<=":
      return _mod16183(version, version2, arg3);
    default:
      const _TypeError = TypeError;
      const _HermesInternal = HermesInternal;
      const typeError = new TypeError("Invalid operator: " + arg1);
      throw typeError;
  }
};