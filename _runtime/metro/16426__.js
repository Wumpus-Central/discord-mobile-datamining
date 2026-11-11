// === Module 16426: ? ===

// Module 16426
import _mod16420 from "module_16420" /* 16420 */;
import _mod16421 from "module_16421" /* 16421 */;
import _mod16422 from "module_16422" /* 16422 */;
import _mod16423 from "module_16423" /* 16423 */;
import _mod16424 from "module_16424" /* 16424 */;
import _mod16425 from "module_16425" /* 16425 */;


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
      let tmp13 = _mod16422;
      let tmp13Result = tmp13(version, version2, arg3);
      return tmp13Result;
    case "=":
      tmp13 = _mod16422;
      tmp13Result = tmp13(version, version2, arg3);
      return tmp13Result;
    case "==":
      tmp13 = _mod16422;
      tmp13Result = tmp13(version, version2, arg3);
      return tmp13Result;
    case "!=":
      return _mod16423(version, version2, arg3);
    case ">":
      return _mod16420(version, version2, arg3);
    case ">=":
      return _mod16424(version, version2, arg3);
    case "<":
      return _mod16421(version, version2, arg3);
    case "<=":
      return _mod16425(version, version2, arg3);
    default:
      const _TypeError = TypeError;
      const _HermesInternal = HermesInternal;
      const typeError = new TypeError("Invalid operator: " + arg1);
      throw typeError;
  }
};