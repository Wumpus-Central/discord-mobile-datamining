// _runtime/metro/15263__.js
import _mod15257 from "15257__.js";
import _mod15258 from "15258__.js";
import _mod15259 from "15259__.js";
import _mod15260 from "15260__.js";
import _mod15261 from "15261__.js";
import _mod15262 from "15262__.js";

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
      let tmp13 = _mod15259;
      let tmp13Result = tmp13(version, version2, arg3);
      return tmp13Result;
    case "=":
      tmp13 = _mod15259;
      tmp13Result = tmp13(version, version2, arg3);
      return tmp13Result;
    case "==":
      tmp13 = _mod15259;
      tmp13Result = tmp13(version, version2, arg3);
      return tmp13Result;
    case "!=":
      return _mod15260(version, version2, arg3);
    case ">":
      return _mod15257(version, version2, arg3);
    case ">=":
      return _mod15261(version, version2, arg3);
    case "<":
      return _mod15258(version, version2, arg3);
    case "<=":
      return _mod15262(version, version2, arg3);
    default:
      const _TypeError = TypeError;
      const _HermesInternal = HermesInternal;
      const typeError = new TypeError("Invalid operator: " + arg1);
      throw typeError;
  }
};
