// _runtime/metro/14305__.js
import _mod14299 from "14299__.js";
import _mod14300 from "14300__.js";
import _mod14301 from "14301__.js";
import _mod14302 from "14302__.js";
import _mod14303 from "14303__.js";
import _mod14304 from "14304__.js";

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
      let tmp13 = _mod14301;
      let tmp13Result = tmp13(version, version2, arg3);
      return tmp13Result;
    case "=":
      tmp13 = _mod14301;
      tmp13Result = tmp13(version, version2, arg3);
      return tmp13Result;
    case "==":
      tmp13 = _mod14301;
      tmp13Result = tmp13(version, version2, arg3);
      return tmp13Result;
    case "!=":
      return _mod14302(version, version2, arg3);
    case ">":
      return _mod14299(version, version2, arg3);
    case ">=":
      return _mod14303(version, version2, arg3);
    case "<":
      return _mod14300(version, version2, arg3);
    case "<=":
      return _mod14304(version, version2, arg3);
    default:
      const _TypeError = TypeError;
      const _HermesInternal = HermesInternal;
      const typeError = new TypeError("Invalid operator: " + arg1);
      throw typeError;
  }
};
