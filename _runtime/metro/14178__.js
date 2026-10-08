// === Module 14178: ? ===

// Module 14178
import _mod14172 from "module_14172" /* 14172 */;
import _mod14173 from "module_14173" /* 14173 */;
import _mod14174 from "module_14174" /* 14174 */;
import _mod14175 from "module_14175" /* 14175 */;
import _mod14176 from "module_14176" /* 14176 */;
import _mod14177 from "module_14177" /* 14177 */;


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
      let tmp13 = _mod14174;
      let tmp13Result = tmp13(version, version2, arg3);
      return tmp13Result;
    case "=":
      tmp13 = _mod14174;
      tmp13Result = tmp13(version, version2, arg3);
      return tmp13Result;
    case "==":
      tmp13 = _mod14174;
      tmp13Result = tmp13(version, version2, arg3);
      return tmp13Result;
    case "!=":
      return _mod14175(version, version2, arg3);
    case ">":
      return _mod14172(version, version2, arg3);
    case ">=":
      return _mod14176(version, version2, arg3);
    case "<":
      return _mod14173(version, version2, arg3);
    case "<=":
      return _mod14177(version, version2, arg3);
    default:
      const _TypeError = TypeError;
      const _HermesInternal = HermesInternal;
      const typeError = new TypeError("Invalid operator: " + arg1);
      throw typeError;
  }
};