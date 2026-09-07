// _runtime/metro/14045__.js
import _mod14039 from "14039__.js";
import _mod14040 from "14040__.js";
import _mod14041 from "14041__.js";
import _mod14042 from "14042__.js";
import _mod14043 from "14043__.js";
import _mod14044 from "14044__.js";

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
      let tmp13 = _mod14041;
      let tmp13Result = tmp13(version, version2, arg3);
      return tmp13Result;
    case "=":
      tmp13 = _mod14041;
      tmp13Result = tmp13(version, version2, arg3);
      return tmp13Result;
    case "==":
      tmp13 = _mod14041;
      tmp13Result = tmp13(version, version2, arg3);
      return tmp13Result;
    case "!=":
      return _mod14042(version, version2, arg3);
    case ">":
      return _mod14039(version, version2, arg3);
    case ">=":
      return _mod14043(version, version2, arg3);
    case "<":
      return _mod14040(version, version2, arg3);
    case "<=":
      return _mod14044(version, version2, arg3);
    default:
      const _TypeError = TypeError;
      const _HermesInternal = HermesInternal;
      const typeError = new TypeError("Invalid operator: " + arg1);
      throw typeError;
  }
};
