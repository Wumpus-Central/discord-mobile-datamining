// _runtime/metro/16069__.js
import _mod16063 from "16063__.js";
import _mod16064 from "16064__.js";
import _mod16065 from "16065__.js";
import _mod16066 from "16066__.js";
import _mod16067 from "16067__.js";
import _mod16068 from "16068__.js";

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
      let tmp13 = _mod16065;
      let tmp13Result = tmp13(version, version2, arg3);
      return tmp13Result;
    case "=":
      tmp13 = _mod16065;
      tmp13Result = tmp13(version, version2, arg3);
      return tmp13Result;
    case "==":
      tmp13 = _mod16065;
      tmp13Result = tmp13(version, version2, arg3);
      return tmp13Result;
    case "!=":
      return _mod16066(version, version2, arg3);
    case ">":
      return _mod16063(version, version2, arg3);
    case ">=":
      return _mod16067(version, version2, arg3);
    case "<":
      return _mod16064(version, version2, arg3);
    case "<=":
      return _mod16068(version, version2, arg3);
    default:
      const _TypeError = TypeError;
      const _HermesInternal = HermesInternal;
      const typeError = new TypeError("Invalid operator: " + arg1);
      throw typeError;
  }
};
