// _runtime/metro/15340__.js
import _mod15334 from "15334__.js";
import _mod15335 from "15335__.js";
import _mod15336 from "15336__.js";
import _mod15337 from "15337__.js";
import _mod15338 from "15338__.js";
import _mod15339 from "15339__.js";

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
      let tmp13 = _mod15336;
      let tmp13Result = tmp13(version, version2, arg3);
      return tmp13Result;
    case "=":
      tmp13 = _mod15336;
      tmp13Result = tmp13(version, version2, arg3);
      return tmp13Result;
    case "==":
      tmp13 = _mod15336;
      tmp13Result = tmp13(version, version2, arg3);
      return tmp13Result;
    case "!=":
      return _mod15337(version, version2, arg3);
    case ">":
      return _mod15334(version, version2, arg3);
    case ">=":
      return _mod15338(version, version2, arg3);
    case "<":
      return _mod15335(version, version2, arg3);
    case "<=":
      return _mod15339(version, version2, arg3);
    default:
      const _TypeError = TypeError;
      const _HermesInternal = HermesInternal;
      const typeError = new TypeError("Invalid operator: " + arg1);
      throw typeError;
  }
};
