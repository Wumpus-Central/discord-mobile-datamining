// === Module 16580: ? ===

// Module 16580
import _mod16574 from "module_16574" /* 16574 */;
import _mod16575 from "module_16575" /* 16575 */;
import _mod16576 from "module_16576" /* 16576 */;
import _mod16577 from "module_16577" /* 16577 */;
import _mod16578 from "module_16578" /* 16578 */;
import _mod16579 from "module_16579" /* 16579 */;


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
      let tmp13 = _mod16576;
      let tmp13Result = tmp13(version, version2, arg3);
      return tmp13Result;
    case "=":
      tmp13 = _mod16576;
      tmp13Result = tmp13(version, version2, arg3);
      return tmp13Result;
    case "==":
      tmp13 = _mod16576;
      tmp13Result = tmp13(version, version2, arg3);
      return tmp13Result;
    case "!=":
      return _mod16577(version, version2, arg3);
    case ">":
      return _mod16574(version, version2, arg3);
    case ">=":
      return _mod16578(version, version2, arg3);
    case "<":
      return _mod16575(version, version2, arg3);
    case "<=":
      return _mod16579(version, version2, arg3);
    default:
      const _TypeError = TypeError;
      const _HermesInternal = HermesInternal;
      const typeError = new TypeError("Invalid operator: " + arg1);
      throw typeError;
  }
};