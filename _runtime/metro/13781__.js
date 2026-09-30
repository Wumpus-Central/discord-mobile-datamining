// === Module 13781: ? ===

// Module 13781
import _mod13775 from "module_13775" /* 13775 */;
import _mod13776 from "module_13776" /* 13776 */;
import _mod13777 from "module_13777" /* 13777 */;
import _mod13778 from "module_13778" /* 13778 */;
import _mod13779 from "module_13779" /* 13779 */;
import _mod13780 from "module_13780" /* 13780 */;


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
      let tmp13 = _mod13777;
      let tmp13Result = tmp13(version, version2, arg3);
      return tmp13Result;
    case "=":
      tmp13 = _mod13777;
      tmp13Result = tmp13(version, version2, arg3);
      return tmp13Result;
    case "==":
      tmp13 = _mod13777;
      tmp13Result = tmp13(version, version2, arg3);
      return tmp13Result;
    case "!=":
      return _mod13778(version, version2, arg3);
    case ">":
      return _mod13775(version, version2, arg3);
    case ">=":
      return _mod13779(version, version2, arg3);
    case "<":
      return _mod13776(version, version2, arg3);
    case "<=":
      return _mod13780(version, version2, arg3);
    default:
      const _TypeError = TypeError;
      const _HermesInternal = HermesInternal;
      const typeError = new TypeError("Invalid operator: " + arg1);
      throw typeError;
  }
};