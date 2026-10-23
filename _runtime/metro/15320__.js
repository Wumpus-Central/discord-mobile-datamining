// _runtime/metro/15320__.js
import _mod15314 from "15314__.js";
import _mod15315 from "15315__.js";
import _mod15316 from "15316__.js";
import _mod15317 from "15317__.js";
import _mod15318 from "15318__.js";
import _mod15319 from "15319__.js";

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
      let tmp13 = _mod15316;
      let tmp13Result = tmp13(version, version2, arg3);
      return tmp13Result;
    case "=":
      tmp13 = _mod15316;
      tmp13Result = tmp13(version, version2, arg3);
      return tmp13Result;
    case "==":
      tmp13 = _mod15316;
      tmp13Result = tmp13(version, version2, arg3);
      return tmp13Result;
    case "!=":
      return _mod15317(version, version2, arg3);
    case ">":
      return _mod15314(version, version2, arg3);
    case ">=":
      return _mod15318(version, version2, arg3);
    case "<":
      return _mod15315(version, version2, arg3);
    case "<=":
      return _mod15319(version, version2, arg3);
    default:
      const _TypeError = TypeError;
      const _HermesInternal = HermesInternal;
      const typeError = new TypeError("Invalid operator: " + arg1);
      throw typeError;
  }
};
