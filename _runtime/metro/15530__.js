// _runtime/metro/15530__.js
import _mod15524 from "15524__.js";
import _mod15525 from "15525__.js";
import _mod15526 from "15526__.js";
import _mod15527 from "15527__.js";
import _mod15528 from "15528__.js";
import _mod15529 from "15529__.js";

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
      let tmp13 = _mod15526;
      let tmp13Result = tmp13(version, version2, arg3);
      return tmp13Result;
    case "=":
      tmp13 = _mod15526;
      tmp13Result = tmp13(version, version2, arg3);
      return tmp13Result;
    case "==":
      tmp13 = _mod15526;
      tmp13Result = tmp13(version, version2, arg3);
      return tmp13Result;
    case "!=":
      return _mod15527(version, version2, arg3);
    case ">":
      return _mod15524(version, version2, arg3);
    case ">=":
      return _mod15528(version, version2, arg3);
    case "<":
      return _mod15525(version, version2, arg3);
    case "<=":
      return _mod15529(version, version2, arg3);
    default:
      const _TypeError = TypeError;
      const _HermesInternal = HermesInternal;
      const typeError = new TypeError("Invalid operator: " + arg1);
      throw typeError;
  }
};
