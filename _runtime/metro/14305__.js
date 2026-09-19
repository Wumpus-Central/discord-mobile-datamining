// === Module 14305: ? ===

// Module 14305
import _mod14299 from "module_14299" /* 14299 */;
import _mod14300 from "module_14300" /* 14300 */;
import _mod14301 from "module_14301" /* 14301 */;
import _mod14302 from "module_14302" /* 14302 */;
import _mod14303 from "module_14303" /* 14303 */;
import _mod14304 from "module_14304" /* 14304 */;


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
      let tmp13 = _mod14301;
      let tmp13Result = tmp13(version, version2, arg3);
      return tmp13Result;
    case "=":
      tmp13 = _mod14301;
      tmp13Result = tmp13(version, version2, arg3);
      return tmp13Result;
    case "==":
      tmp13 = _mod14301;
      tmp13Result = tmp13(version, version2, arg3);
      return tmp13Result;
    case "!=":
      return _mod14302(version, version2, arg3);
    case ">":
      return _mod14299(version, version2, arg3);
    case ">=":
      return _mod14303(version, version2, arg3);
    case "<":
      return _mod14300(version, version2, arg3);
    case "<=":
      return _mod14304(version, version2, arg3);
    default:
      const _TypeError = TypeError;
      const _HermesInternal = HermesInternal;
      const typeError = new TypeError("Invalid operator: " + arg1);
      throw typeError;
  }
};