// _runtime/metro/14274__.js
import _mod14268 from "14268__.js";
import _mod14269 from "14269__.js";
import _mod14270 from "14270__.js";
import _mod14271 from "14271__.js";
import _mod14272 from "14272__.js";
import _mod14273 from "14273__.js";

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
      let tmp13 = _mod14270;
      let tmp13Result = tmp13(version, version2, arg3);
      return tmp13Result;
    case "=":
      tmp13 = _mod14270;
      tmp13Result = tmp13(version, version2, arg3);
      return tmp13Result;
    case "==":
      tmp13 = _mod14270;
      tmp13Result = tmp13(version, version2, arg3);
      return tmp13Result;
    case "!=":
      return _mod14271(version, version2, arg3);
    case ">":
      return _mod14268(version, version2, arg3);
    case ">=":
      return _mod14272(version, version2, arg3);
    case "<":
      return _mod14269(version, version2, arg3);
    case "<=":
      return _mod14273(version, version2, arg3);
    default:
      const _TypeError = TypeError;
      const _HermesInternal = HermesInternal;
      const typeError = new TypeError("Invalid operator: " + arg1);
      throw typeError;
  }
};
