// _runtime/metro/15299__.js
import _mod15293 from "15293__.js";
import _mod15294 from "15294__.js";
import _mod15295 from "15295__.js";
import _mod15296 from "15296__.js";
import _mod15297 from "15297__.js";
import _mod15298 from "15298__.js";

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
      let tmp13 = _mod15295;
      let tmp13Result = tmp13(version, version2, arg3);
      return tmp13Result;
    case "=":
      tmp13 = _mod15295;
      tmp13Result = tmp13(version, version2, arg3);
      return tmp13Result;
    case "==":
      tmp13 = _mod15295;
      tmp13Result = tmp13(version, version2, arg3);
      return tmp13Result;
    case "!=":
      return _mod15296(version, version2, arg3);
    case ">":
      return _mod15293(version, version2, arg3);
    case ">=":
      return _mod15297(version, version2, arg3);
    case "<":
      return _mod15294(version, version2, arg3);
    case "<=":
      return _mod15298(version, version2, arg3);
    default:
      const _TypeError = TypeError;
      const _HermesInternal = HermesInternal;
      const typeError = new TypeError("Invalid operator: " + arg1);
      throw typeError;
  }
};
