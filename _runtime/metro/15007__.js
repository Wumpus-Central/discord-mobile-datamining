// === Module 15007: ? ===

// Module 15007
import _mod15001 from "module_15001" /* 15001 */;
import _mod15002 from "module_15002" /* 15002 */;
import _mod15003 from "module_15003" /* 15003 */;
import _mod15004 from "module_15004" /* 15004 */;
import _mod15005 from "module_15005" /* 15005 */;
import _mod15006 from "module_15006" /* 15006 */;


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
      let tmp13 = _mod15003;
      let tmp13Result = tmp13(version, version2, arg3);
      return tmp13Result;
    case "=":
      tmp13 = _mod15003;
      tmp13Result = tmp13(version, version2, arg3);
      return tmp13Result;
    case "==":
      tmp13 = _mod15003;
      tmp13Result = tmp13(version, version2, arg3);
      return tmp13Result;
    case "!=":
      return _mod15004(version, version2, arg3);
    case ">":
      return _mod15001(version, version2, arg3);
    case ">=":
      return _mod15005(version, version2, arg3);
    case "<":
      return _mod15002(version, version2, arg3);
    case "<=":
      return _mod15006(version, version2, arg3);
    default:
      const _TypeError = TypeError;
      const _HermesInternal = HermesInternal;
      const typeError = new TypeError("Invalid operator: " + arg1);
      throw typeError;
  }
};