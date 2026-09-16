// === Module 14147: ? ===

// Module 14147
import _mod14141 from "module_14141" /* 14141 */;
import _mod14142 from "module_14142" /* 14142 */;
import _mod14143 from "module_14143" /* 14143 */;
import _mod14144 from "module_14144" /* 14144 */;
import _mod14145 from "module_14145" /* 14145 */;
import _mod14146 from "module_14146" /* 14146 */;


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
      let tmp13 = _mod14143;
      let tmp13Result = tmp13(version, version2, arg3);
      return tmp13Result;
    case "=":
      tmp13 = _mod14143;
      tmp13Result = tmp13(version, version2, arg3);
      return tmp13Result;
    case "==":
      tmp13 = _mod14143;
      tmp13Result = tmp13(version, version2, arg3);
      return tmp13Result;
    case "!=":
      return _mod14144(version, version2, arg3);
    case ">":
      return _mod14141(version, version2, arg3);
    case ">=":
      return _mod14145(version, version2, arg3);
    case "<":
      return _mod14142(version, version2, arg3);
    case "<=":
      return _mod14146(version, version2, arg3);
    default:
      const _TypeError = TypeError;
      const _HermesInternal = HermesInternal;
      const typeError = new TypeError("Invalid operator: " + arg1);
      throw typeError;
  }
};