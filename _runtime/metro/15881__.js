// _runtime/metro/15881__.js
import _mod15875 from "15875__.js";
import _mod15876 from "15876__.js";
import _mod15877 from "15877__.js";
import _mod15878 from "15878__.js";
import _mod15879 from "15879__.js";
import _mod15880 from "15880__.js";

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
      let tmp13 = _mod15877;
      let tmp13Result = tmp13(version, version2, arg3);
      return tmp13Result;
    case "=":
      tmp13 = _mod15877;
      tmp13Result = tmp13(version, version2, arg3);
      return tmp13Result;
    case "==":
      tmp13 = _mod15877;
      tmp13Result = tmp13(version, version2, arg3);
      return tmp13Result;
    case "!=":
      return _mod15878(version, version2, arg3);
    case ">":
      return _mod15875(version, version2, arg3);
    case ">=":
      return _mod15879(version, version2, arg3);
    case "<":
      return _mod15876(version, version2, arg3);
    case "<=":
      return _mod15880(version, version2, arg3);
    default:
      const _TypeError = TypeError;
      const _HermesInternal = HermesInternal;
      const typeError = new TypeError("Invalid operator: " + arg1);
      throw typeError;
  }
};
