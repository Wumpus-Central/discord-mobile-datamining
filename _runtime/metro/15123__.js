// _runtime/metro/15123__.js
import _mod15117 from "15117__.js";
import _mod15118 from "15118__.js";
import _mod15119 from "15119__.js";
import _mod15120 from "15120__.js";
import _mod15121 from "15121__.js";
import _mod15122 from "15122__.js";

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
      let tmp13 = _mod15119;
      let tmp13Result = tmp13(version, version2, arg3);
      return tmp13Result;
    case "=":
      tmp13 = _mod15119;
      tmp13Result = tmp13(version, version2, arg3);
      return tmp13Result;
    case "==":
      tmp13 = _mod15119;
      tmp13Result = tmp13(version, version2, arg3);
      return tmp13Result;
    case "!=":
      return _mod15120(version, version2, arg3);
    case ">":
      return _mod15117(version, version2, arg3);
    case ">=":
      return _mod15121(version, version2, arg3);
    case "<":
      return _mod15118(version, version2, arg3);
    case "<=":
      return _mod15122(version, version2, arg3);
    default:
      const _TypeError = TypeError;
      const _HermesInternal = HermesInternal;
      const typeError = new TypeError("Invalid operator: " + arg1);
      throw typeError;
  }
};
