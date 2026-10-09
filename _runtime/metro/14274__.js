// === Module 14274: ? ===

// Module 14274
import _mod14268 from "module_14268" /* 14268 */;
import _mod14269 from "module_14269" /* 14269 */;
import _mod14270 from "module_14270" /* 14270 */;
import _mod14271 from "module_14271" /* 14271 */;
import _mod14272 from "module_14272" /* 14272 */;
import _mod14273 from "module_14273" /* 14273 */;


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
      let tmp13 = _mod14270;
      let tmp13Result = tmp13(version, version2, arg3);
      return tmp13Result;
    case "=":
      tmp13 = _mod14270;
      tmp13Result = tmp13(version, version2, arg3);
      return tmp13Result;
    case "==":
      tmp13 = _mod14270;
      tmp13Result = tmp13(version, version2, arg3);
      return tmp13Result;
    case "!=":
      return _mod14271(version, version2, arg3);
    case ">":
      return _mod14268(version, version2, arg3);
    case ">=":
      return _mod14272(version, version2, arg3);
    case "<":
      return _mod14269(version, version2, arg3);
    case "<=":
      return _mod14273(version, version2, arg3);
    default:
      const _TypeError = TypeError;
      const _HermesInternal = HermesInternal;
      const typeError = new TypeError("Invalid operator: " + arg1);
      throw typeError;
  }
};