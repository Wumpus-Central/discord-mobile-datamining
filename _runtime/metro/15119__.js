// _runtime/metro/15119__.js
import _mod15113 from "15113__.js";
import _mod15114 from "15114__.js";
import _mod15115 from "15115__.js";
import _mod15116 from "15116__.js";
import _mod15117 from "15117__.js";
import _mod15118 from "15118__.js";

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
      let tmp13 = _mod15115;
      let tmp13Result = tmp13(version, version2, arg3);
      return tmp13Result;
    case "=":
      tmp13 = _mod15115;
      tmp13Result = tmp13(version, version2, arg3);
      return tmp13Result;
    case "==":
      tmp13 = _mod15115;
      tmp13Result = tmp13(version, version2, arg3);
      return tmp13Result;
    case "!=":
      return _mod15116(version, version2, arg3);
    case ">":
      return _mod15113(version, version2, arg3);
    case ">=":
      return _mod15117(version, version2, arg3);
    case "<":
      return _mod15114(version, version2, arg3);
    case "<=":
      return _mod15118(version, version2, arg3);
    default:
      const _TypeError = TypeError;
      const _HermesInternal = HermesInternal;
      const typeError = new TypeError("Invalid operator: " + arg1);
      throw typeError;
  }
};
