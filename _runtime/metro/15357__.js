// _runtime/metro/15357__.js
import _mod15351 from "15351__.js";
import _mod15352 from "15352__.js";
import _mod15353 from "15353__.js";
import _mod15354 from "15354__.js";
import _mod15355 from "15355__.js";
import _mod15356 from "15356__.js";

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
      let tmp13 = _mod15353;
      let tmp13Result = tmp13(version, version2, arg3);
      return tmp13Result;
    case "=":
      tmp13 = _mod15353;
      tmp13Result = tmp13(version, version2, arg3);
      return tmp13Result;
    case "==":
      tmp13 = _mod15353;
      tmp13Result = tmp13(version, version2, arg3);
      return tmp13Result;
    case "!=":
      return _mod15354(version, version2, arg3);
    case ">":
      return _mod15351(version, version2, arg3);
    case ">=":
      return _mod15355(version, version2, arg3);
    case "<":
      return _mod15352(version, version2, arg3);
    case "<=":
      return _mod15356(version, version2, arg3);
    default:
      const _TypeError = TypeError;
      const _HermesInternal = HermesInternal;
      const typeError = new TypeError("Invalid operator: " + arg1);
      throw typeError;
  }
};
