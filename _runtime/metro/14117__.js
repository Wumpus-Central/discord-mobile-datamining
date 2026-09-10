// _runtime/metro/14117__.js
import _mod14111 from "14111__.js";
import _mod14112 from "14112__.js";
import _mod14113 from "14113__.js";
import _mod14114 from "14114__.js";
import _mod14115 from "14115__.js";
import _mod14116 from "14116__.js";

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
      let tmp13 = _mod14113;
      let tmp13Result = tmp13(version, version2, arg3);
      return tmp13Result;
    case "=":
      tmp13 = _mod14113;
      tmp13Result = tmp13(version, version2, arg3);
      return tmp13Result;
    case "==":
      tmp13 = _mod14113;
      tmp13Result = tmp13(version, version2, arg3);
      return tmp13Result;
    case "!=":
      return _mod14114(version, version2, arg3);
    case ">":
      return _mod14111(version, version2, arg3);
    case ">=":
      return _mod14115(version, version2, arg3);
    case "<":
      return _mod14112(version, version2, arg3);
    case "<=":
      return _mod14116(version, version2, arg3);
    default:
      const _TypeError = TypeError;
      const _HermesInternal = HermesInternal;
      const typeError = new TypeError("Invalid operator: " + arg1);
      throw typeError;
  }
};
