// _runtime/metro/14311__.js
import _mod14305 from "14305__.js";
import _mod14306 from "14306__.js";
import _mod14307 from "14307__.js";
import _mod14308 from "14308__.js";
import _mod14309 from "14309__.js";
import _mod14310 from "14310__.js";

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
      let tmp13 = _mod14307;
      let tmp13Result = tmp13(version, version2, arg3);
      return tmp13Result;
    case "=":
      tmp13 = _mod14307;
      tmp13Result = tmp13(version, version2, arg3);
      return tmp13Result;
    case "==":
      tmp13 = _mod14307;
      tmp13Result = tmp13(version, version2, arg3);
      return tmp13Result;
    case "!=":
      return _mod14308(version, version2, arg3);
    case ">":
      return _mod14305(version, version2, arg3);
    case ">=":
      return _mod14309(version, version2, arg3);
    case "<":
      return _mod14306(version, version2, arg3);
    case "<=":
      return _mod14310(version, version2, arg3);
    default:
      const _TypeError = TypeError;
      const _HermesInternal = HermesInternal;
      const typeError = new TypeError("Invalid operator: " + arg1);
      throw typeError;
  }
};
