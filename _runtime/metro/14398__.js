// === Module 14398: ? ===

// Module 14398
import _mod14392 from "module_14392" /* 14392 */;
import _mod14393 from "module_14393" /* 14393 */;
import _mod14394 from "module_14394" /* 14394 */;
import _mod14395 from "module_14395" /* 14395 */;
import _mod14396 from "module_14396" /* 14396 */;
import _mod14397 from "module_14397" /* 14397 */;


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
      let tmp13 = _mod14394;
      let tmp13Result = tmp13(version, version2, arg3);
      return tmp13Result;
    case "=":
      tmp13 = _mod14394;
      tmp13Result = tmp13(version, version2, arg3);
      return tmp13Result;
    case "==":
      tmp13 = _mod14394;
      tmp13Result = tmp13(version, version2, arg3);
      return tmp13Result;
    case "!=":
      return _mod14395(version, version2, arg3);
    case ">":
      return _mod14392(version, version2, arg3);
    case ">=":
      return _mod14396(version, version2, arg3);
    case "<":
      return _mod14393(version, version2, arg3);
    case "<=":
      return _mod14397(version, version2, arg3);
    default:
      const _TypeError = TypeError;
      const _HermesInternal = HermesInternal;
      const typeError = new TypeError("Invalid operator: " + arg1);
      throw typeError;
  }
};