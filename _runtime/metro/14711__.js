// _runtime/metro/14711__.js
import _mod14705 from "14705__.js";
import _mod14706 from "14706__.js";
import _mod14707 from "14707__.js";
import _mod14708 from "14708__.js";
import _mod14709 from "14709__.js";
import _mod14710 from "14710__.js";

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
      let tmp13 = _mod14707;
      let tmp13Result = tmp13(version, version2, arg3);
      return tmp13Result;
    case "=":
      tmp13 = _mod14707;
      tmp13Result = tmp13(version, version2, arg3);
      return tmp13Result;
    case "==":
      tmp13 = _mod14707;
      tmp13Result = tmp13(version, version2, arg3);
      return tmp13Result;
    case "!=":
      return _mod14708(version, version2, arg3);
    case ">":
      return _mod14705(version, version2, arg3);
    case ">=":
      return _mod14709(version, version2, arg3);
    case "<":
      return _mod14706(version, version2, arg3);
    case "<=":
      return _mod14710(version, version2, arg3);
    default:
      const _TypeError = TypeError;
      const _HermesInternal = HermesInternal;
      const typeError = new TypeError("Invalid operator: " + arg1);
      throw typeError;
  }
};
