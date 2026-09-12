// _runtime/metro/14128__.js
import _mod14122 from "14122__.js";
import _mod14123 from "14123__.js";
import _mod14124 from "14124__.js";
import _mod14125 from "14125__.js";
import _mod14126 from "14126__.js";
import _mod14127 from "14127__.js";

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
      let tmp13 = _mod14124;
      let tmp13Result = tmp13(version, version2, arg3);
      return tmp13Result;
    case "=":
      tmp13 = _mod14124;
      tmp13Result = tmp13(version, version2, arg3);
      return tmp13Result;
    case "==":
      tmp13 = _mod14124;
      tmp13Result = tmp13(version, version2, arg3);
      return tmp13Result;
    case "!=":
      return _mod14125(version, version2, arg3);
    case ">":
      return _mod14122(version, version2, arg3);
    case ">=":
      return _mod14126(version, version2, arg3);
    case "<":
      return _mod14123(version, version2, arg3);
    case "<=":
      return _mod14127(version, version2, arg3);
    default:
      const _TypeError = TypeError;
      const _HermesInternal = HermesInternal;
      const typeError = new TypeError("Invalid operator: " + arg1);
      throw typeError;
  }
};
