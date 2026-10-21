// === Module 15242: ? ===

// Module 15242
import _mod15236 from "module_15236" /* 15236 */;
import _mod15237 from "module_15237" /* 15237 */;
import _mod15238 from "module_15238" /* 15238 */;
import _mod15239 from "module_15239" /* 15239 */;
import _mod15240 from "module_15240" /* 15240 */;
import _mod15241 from "module_15241" /* 15241 */;


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
      let tmp13 = _mod15238;
      let tmp13Result = tmp13(version, version2, arg3);
      return tmp13Result;
    case "=":
      tmp13 = _mod15238;
      tmp13Result = tmp13(version, version2, arg3);
      return tmp13Result;
    case "==":
      tmp13 = _mod15238;
      tmp13Result = tmp13(version, version2, arg3);
      return tmp13Result;
    case "!=":
      return _mod15239(version, version2, arg3);
    case ">":
      return _mod15236(version, version2, arg3);
    case ">=":
      return _mod15240(version, version2, arg3);
    case "<":
      return _mod15237(version, version2, arg3);
    case "<=":
      return _mod15241(version, version2, arg3);
    default:
      const _TypeError = TypeError;
      const _HermesInternal = HermesInternal;
      const typeError = new TypeError("Invalid operator: " + arg1);
      throw typeError;
  }
};