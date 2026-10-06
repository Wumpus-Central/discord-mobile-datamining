// === Module 13875: ? ===

// Module 13875
import _mod13869 from "module_13869" /* 13869 */;
import _mod13870 from "module_13870" /* 13870 */;
import _mod13871 from "module_13871" /* 13871 */;
import _mod13872 from "module_13872" /* 13872 */;
import _mod13873 from "module_13873" /* 13873 */;
import _mod13874 from "module_13874" /* 13874 */;


export default function(version, arg1, version2, arg3) {
  let tmp13;
  let tmp13Result;
  switch (arg1) {
    case "===":
    {
      let version3 = version;
      if (typeof version === "object") {
        version3 = version.version;
      }
      let version4 = version2;
      if (typeof version2 === "object") {
        version4 = version2.version;
      }
      return version3 === version4;
    }
    case "!==":
    {
      if (typeof version === "object") {
        const versionValue = version.version;
      }
      if (typeof version2 === "object") {
        version2 = version2.version;
      }
      return version !== version2;
    }
    case "":
    {
      tmp13 = _mod13871;
      tmp13Result = tmp13(version, version2, arg3);
      return tmp13Result;
    }
    case "=":
    {
      tmp13 = _mod13871;
      tmp13Result = tmp13(version, version2, arg3);
      return tmp13Result;
    }
    case "==":
    {
      tmp13 = _mod13871;
      tmp13Result = tmp13(version, version2, arg3);
      return tmp13Result;
    }
    case "!=":
    {
      return _mod13872(version, version2, arg3);
    }
    case ">":
    {
      return _mod13869(version, version2, arg3);
    }
    case ">=":
    {
      return _mod13873(version, version2, arg3);
    }
    case "<":
    {
      return _mod13870(version, version2, arg3);
    }
    case "<=":
    {
      return _mod13874(version, version2, arg3);
    }
    default:
    {
      const _TypeError = TypeError;
      const _HermesInternal = HermesInternal;
      const self = this;
      const self2 = this;
      const typeError = new TypeError("Invalid operator: " + arg1);
      throw typeError;
    }
  }
};