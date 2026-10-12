// === Module 14352: ? ===

// Module 14352
import _mod14346 from "module_14346" /* 14346 */;
import _mod14347 from "module_14347" /* 14347 */;
import _mod14348 from "module_14348" /* 14348 */;
import _mod14349 from "module_14349" /* 14349 */;
import _mod14350 from "module_14350" /* 14350 */;
import _mod14351 from "module_14351" /* 14351 */;


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
      let tmp13 = _mod14348;
      let tmp13Result = tmp13(version, version2, arg3);
      return tmp13Result;
    case "=":
      tmp13 = _mod14348;
      tmp13Result = tmp13(version, version2, arg3);
      return tmp13Result;
    case "==":
      tmp13 = _mod14348;
      tmp13Result = tmp13(version, version2, arg3);
      return tmp13Result;
    case "!=":
      return _mod14349(version, version2, arg3);
    case ">":
      return _mod14346(version, version2, arg3);
    case ">=":
      return _mod14350(version, version2, arg3);
    case "<":
      return _mod14347(version, version2, arg3);
    case "<=":
      return _mod14351(version, version2, arg3);
    default:
      const _TypeError = TypeError;
      const _HermesInternal = HermesInternal;
      const typeError = new TypeError("Invalid operator: " + arg1);
      throw typeError;
  }
};