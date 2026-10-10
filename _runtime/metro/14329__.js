// === Module 14329: ? ===

// Module 14329
import _mod14323 from "module_14323" /* 14323 */;
import _mod14324 from "module_14324" /* 14324 */;
import _mod14325 from "module_14325" /* 14325 */;
import _mod14326 from "module_14326" /* 14326 */;
import _mod14327 from "module_14327" /* 14327 */;
import _mod14328 from "module_14328" /* 14328 */;


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
      let tmp13 = _mod14325;
      let tmp13Result = tmp13(version, version2, arg3);
      return tmp13Result;
    case "=":
      tmp13 = _mod14325;
      tmp13Result = tmp13(version, version2, arg3);
      return tmp13Result;
    case "==":
      tmp13 = _mod14325;
      tmp13Result = tmp13(version, version2, arg3);
      return tmp13Result;
    case "!=":
      return _mod14326(version, version2, arg3);
    case ">":
      return _mod14323(version, version2, arg3);
    case ">=":
      return _mod14327(version, version2, arg3);
    case "<":
      return _mod14324(version, version2, arg3);
    case "<=":
      return _mod14328(version, version2, arg3);
    default:
      const _TypeError = TypeError;
      const _HermesInternal = HermesInternal;
      const typeError = new TypeError("Invalid operator: " + arg1);
      throw typeError;
  }
};