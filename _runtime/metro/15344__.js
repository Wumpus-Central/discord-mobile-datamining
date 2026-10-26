// === Module 15344: ? ===

// Module 15344
import _mod15338 from "module_15338" /* 15338 */;
import _mod15339 from "module_15339" /* 15339 */;
import _mod15340 from "module_15340" /* 15340 */;
import _mod15341 from "module_15341" /* 15341 */;
import _mod15342 from "module_15342" /* 15342 */;
import _mod15343 from "module_15343" /* 15343 */;


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
      let tmp13 = _mod15340;
      let tmp13Result = tmp13(version, version2, arg3);
      return tmp13Result;
    case "=":
      tmp13 = _mod15340;
      tmp13Result = tmp13(version, version2, arg3);
      return tmp13Result;
    case "==":
      tmp13 = _mod15340;
      tmp13Result = tmp13(version, version2, arg3);
      return tmp13Result;
    case "!=":
      return _mod15341(version, version2, arg3);
    case ">":
      return _mod15338(version, version2, arg3);
    case ">=":
      return _mod15342(version, version2, arg3);
    case "<":
      return _mod15339(version, version2, arg3);
    case "<=":
      return _mod15343(version, version2, arg3);
    default:
      const _TypeError = TypeError;
      const _HermesInternal = HermesInternal;
      const typeError = new TypeError("Invalid operator: " + arg1);
      throw typeError;
  }
};