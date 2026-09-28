// === Module 13585: ? ===

// Module 13585
import _mod13579 from "module_13579" /* 13579 */;
import _mod13580 from "module_13580" /* 13580 */;
import _mod13581 from "module_13581" /* 13581 */;
import _mod13582 from "module_13582" /* 13582 */;
import _mod13583 from "module_13583" /* 13583 */;
import _mod13584 from "module_13584" /* 13584 */;


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
      let tmp13 = _mod13581;
      let tmp13Result = tmp13(version, version2, arg3);
      return tmp13Result;
    case "=":
      tmp13 = _mod13581;
      tmp13Result = tmp13(version, version2, arg3);
      return tmp13Result;
    case "==":
      tmp13 = _mod13581;
      tmp13Result = tmp13(version, version2, arg3);
      return tmp13Result;
    case "!=":
      return _mod13582(version, version2, arg3);
    case ">":
      return _mod13579(version, version2, arg3);
    case ">=":
      return _mod13583(version, version2, arg3);
    case "<":
      return _mod13580(version, version2, arg3);
    case "<=":
      return _mod13584(version, version2, arg3);
    default:
      const _TypeError = TypeError;
      const _HermesInternal = HermesInternal;
      const typeError = new TypeError("Invalid operator: " + arg1);
      throw typeError;
  }
};