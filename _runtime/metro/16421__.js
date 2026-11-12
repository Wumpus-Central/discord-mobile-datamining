// === Module 16421: ? ===

// Module 16421
import _mod16415 from "module_16415" /* 16415 */;
import _mod16416 from "module_16416" /* 16416 */;
import _mod16417 from "module_16417" /* 16417 */;
import _mod16418 from "module_16418" /* 16418 */;
import _mod16419 from "module_16419" /* 16419 */;
import _mod16420 from "module_16420" /* 16420 */;


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
      let tmp13 = _mod16417;
      let tmp13Result = tmp13(version, version2, arg3);
      return tmp13Result;
    case "=":
      tmp13 = _mod16417;
      tmp13Result = tmp13(version, version2, arg3);
      return tmp13Result;
    case "==":
      tmp13 = _mod16417;
      tmp13Result = tmp13(version, version2, arg3);
      return tmp13Result;
    case "!=":
      return _mod16418(version, version2, arg3);
    case ">":
      return _mod16415(version, version2, arg3);
    case ">=":
      return _mod16419(version, version2, arg3);
    case "<":
      return _mod16416(version, version2, arg3);
    case "<=":
      return _mod16420(version, version2, arg3);
    default:
      const _TypeError = TypeError;
      const _HermesInternal = HermesInternal;
      const typeError = new TypeError("Invalid operator: " + arg1);
      throw typeError;
  }
};