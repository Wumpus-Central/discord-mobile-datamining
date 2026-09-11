// === Module 14093: ? ===

// Module 14093
import _mod14087 from "module_14087" /* 14087 */;
import _mod14088 from "module_14088" /* 14088 */;
import _mod14089 from "module_14089" /* 14089 */;
import _mod14090 from "module_14090" /* 14090 */;
import _mod14091 from "module_14091" /* 14091 */;
import _mod14092 from "module_14092" /* 14092 */;


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
      let tmp13 = _mod14089;
      let tmp13Result = tmp13(version, version2, arg3);
      return tmp13Result;
    case "=":
      tmp13 = _mod14089;
      tmp13Result = tmp13(version, version2, arg3);
      return tmp13Result;
    case "==":
      tmp13 = _mod14089;
      tmp13Result = tmp13(version, version2, arg3);
      return tmp13Result;
    case "!=":
      return _mod14090(version, version2, arg3);
    case ">":
      return _mod14087(version, version2, arg3);
    case ">=":
      return _mod14091(version, version2, arg3);
    case "<":
      return _mod14088(version, version2, arg3);
    case "<=":
      return _mod14092(version, version2, arg3);
    default:
      const _TypeError = TypeError;
      const _HermesInternal = HermesInternal;
      const typeError = new TypeError("Invalid operator: " + arg1);
      throw typeError;
  }
};