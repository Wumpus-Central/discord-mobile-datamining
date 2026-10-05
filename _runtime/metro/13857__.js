// === Module 13857: ? ===

// Module 13857
import _mod13851 from "module_13851" /* 13851 */;
import _mod13852 from "module_13852" /* 13852 */;
import _mod13853 from "module_13853" /* 13853 */;
import _mod13854 from "module_13854" /* 13854 */;
import _mod13855 from "module_13855" /* 13855 */;
import _mod13856 from "module_13856" /* 13856 */;


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
      let tmp13 = _mod13853;
      let tmp13Result = tmp13(version, version2, arg3);
      return tmp13Result;
    case "=":
      tmp13 = _mod13853;
      tmp13Result = tmp13(version, version2, arg3);
      return tmp13Result;
    case "==":
      tmp13 = _mod13853;
      tmp13Result = tmp13(version, version2, arg3);
      return tmp13Result;
    case "!=":
      return _mod13854(version, version2, arg3);
    case ">":
      return _mod13851(version, version2, arg3);
    case ">=":
      return _mod13855(version, version2, arg3);
    case "<":
      return _mod13852(version, version2, arg3);
    case "<=":
      return _mod13856(version, version2, arg3);
    default:
      const _TypeError = TypeError;
      const _HermesInternal = HermesInternal;
      const typeError = new TypeError("Invalid operator: " + arg1);
      throw typeError;
  }
};