// === Module 15537: ? ===

// Module 15537
import _mod15531 from "module_15531" /* 15531 */;
import _mod15532 from "module_15532" /* 15532 */;
import _mod15533 from "module_15533" /* 15533 */;
import _mod15534 from "module_15534" /* 15534 */;
import _mod15535 from "module_15535" /* 15535 */;
import _mod15536 from "module_15536" /* 15536 */;


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
      let tmp13 = _mod15533;
      let tmp13Result = tmp13(version, version2, arg3);
      return tmp13Result;
    case "=":
      tmp13 = _mod15533;
      tmp13Result = tmp13(version, version2, arg3);
      return tmp13Result;
    case "==":
      tmp13 = _mod15533;
      tmp13Result = tmp13(version, version2, arg3);
      return tmp13Result;
    case "!=":
      return _mod15534(version, version2, arg3);
    case ">":
      return _mod15531(version, version2, arg3);
    case ">=":
      return _mod15535(version, version2, arg3);
    case "<":
      return _mod15532(version, version2, arg3);
    case "<=":
      return _mod15536(version, version2, arg3);
    default:
      const _TypeError = TypeError;
      const _HermesInternal = HermesInternal;
      const typeError = new TypeError("Invalid operator: " + arg1);
      throw typeError;
  }
};