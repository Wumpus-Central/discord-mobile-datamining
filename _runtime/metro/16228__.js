// _runtime/metro/16228__.js
import _mod16222 from "16222__.js";
import _mod16223 from "16223__.js";
import _mod16224 from "16224__.js";
import _mod16225 from "16225__.js";
import _mod16226 from "16226__.js";
import _mod16227 from "16227__.js";

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
      let tmp13 = _mod16224;
      let tmp13Result = tmp13(version, version2, arg3);
      return tmp13Result;
    case "=":
      tmp13 = _mod16224;
      tmp13Result = tmp13(version, version2, arg3);
      return tmp13Result;
    case "==":
      tmp13 = _mod16224;
      tmp13Result = tmp13(version, version2, arg3);
      return tmp13Result;
    case "!=":
      return _mod16225(version, version2, arg3);
    case ">":
      return _mod16222(version, version2, arg3);
    case ">=":
      return _mod16226(version, version2, arg3);
    case "<":
      return _mod16223(version, version2, arg3);
    case "<=":
      return _mod16227(version, version2, arg3);
    default:
      const _TypeError = TypeError;
      const _HermesInternal = HermesInternal;
      const typeError = new TypeError("Invalid operator: " + arg1);
      throw typeError;
  }
};
