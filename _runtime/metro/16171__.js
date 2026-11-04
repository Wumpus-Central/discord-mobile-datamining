// _runtime/metro/16171__.js
import _mod16165 from "16165__.js";
import _mod16166 from "16166__.js";
import _mod16167 from "16167__.js";
import _mod16168 from "16168__.js";
import _mod16169 from "16169__.js";
import _mod16170 from "16170__.js";

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
      let tmp13 = _mod16167;
      let tmp13Result = tmp13(version, version2, arg3);
      return tmp13Result;
    case "=":
      tmp13 = _mod16167;
      tmp13Result = tmp13(version, version2, arg3);
      return tmp13Result;
    case "==":
      tmp13 = _mod16167;
      tmp13Result = tmp13(version, version2, arg3);
      return tmp13Result;
    case "!=":
      return _mod16168(version, version2, arg3);
    case ">":
      return _mod16165(version, version2, arg3);
    case ">=":
      return _mod16169(version, version2, arg3);
    case "<":
      return _mod16166(version, version2, arg3);
    case "<=":
      return _mod16170(version, version2, arg3);
    default:
      const _TypeError = TypeError;
      const _HermesInternal = HermesInternal;
      const typeError = new TypeError("Invalid operator: " + arg1);
      throw typeError;
  }
};
