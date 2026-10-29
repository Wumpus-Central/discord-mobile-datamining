// _runtime/metro/15842__.js
import _mod15836 from "15836__.js";
import _mod15837 from "15837__.js";
import _mod15838 from "15838__.js";
import _mod15839 from "15839__.js";
import _mod15840 from "15840__.js";
import _mod15841 from "15841__.js";

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
      let tmp13 = _mod15838;
      let tmp13Result = tmp13(version, version2, arg3);
      return tmp13Result;
    case "=":
      tmp13 = _mod15838;
      tmp13Result = tmp13(version, version2, arg3);
      return tmp13Result;
    case "==":
      tmp13 = _mod15838;
      tmp13Result = tmp13(version, version2, arg3);
      return tmp13Result;
    case "!=":
      return _mod15839(version, version2, arg3);
    case ">":
      return _mod15836(version, version2, arg3);
    case ">=":
      return _mod15840(version, version2, arg3);
    case "<":
      return _mod15837(version, version2, arg3);
    case "<=":
      return _mod15841(version, version2, arg3);
    default:
      const _TypeError = TypeError;
      const _HermesInternal = HermesInternal;
      const typeError = new TypeError("Invalid operator: " + arg1);
      throw typeError;
  }
};
