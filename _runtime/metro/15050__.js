// _runtime/metro/15050__.js
import _mod15044 from "15044__.js";
import _mod15045 from "15045__.js";
import _mod15046 from "15046__.js";
import _mod15047 from "15047__.js";
import _mod15048 from "15048__.js";
import _mod15049 from "15049__.js";

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
      let tmp13 = _mod15046;
      let tmp13Result = tmp13(version, version2, arg3);
      return tmp13Result;
    case "=":
      tmp13 = _mod15046;
      tmp13Result = tmp13(version, version2, arg3);
      return tmp13Result;
    case "==":
      tmp13 = _mod15046;
      tmp13Result = tmp13(version, version2, arg3);
      return tmp13Result;
    case "!=":
      return _mod15047(version, version2, arg3);
    case ">":
      return _mod15044(version, version2, arg3);
    case ">=":
      return _mod15048(version, version2, arg3);
    case "<":
      return _mod15045(version, version2, arg3);
    case "<=":
      return _mod15049(version, version2, arg3);
    default:
      const _TypeError = TypeError;
      const _HermesInternal = HermesInternal;
      const typeError = new TypeError("Invalid operator: " + arg1);
      throw typeError;
  }
};
