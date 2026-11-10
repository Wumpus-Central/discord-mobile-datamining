// _runtime/metro/16265__.js
import _mod16259 from "16259__.js";
import _mod16260 from "16260__.js";
import _mod16261 from "16261__.js";
import _mod16262 from "16262__.js";
import _mod16263 from "16263__.js";
import _mod16264 from "16264__.js";

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
      let tmp13 = _mod16261;
      let tmp13Result = tmp13(version, version2, arg3);
      return tmp13Result;
    case "=":
      tmp13 = _mod16261;
      tmp13Result = tmp13(version, version2, arg3);
      return tmp13Result;
    case "==":
      tmp13 = _mod16261;
      tmp13Result = tmp13(version, version2, arg3);
      return tmp13Result;
    case "!=":
      return _mod16262(version, version2, arg3);
    case ">":
      return _mod16259(version, version2, arg3);
    case ">=":
      return _mod16263(version, version2, arg3);
    case "<":
      return _mod16260(version, version2, arg3);
    case "<=":
      return _mod16264(version, version2, arg3);
    default:
      const _TypeError = TypeError;
      const _HermesInternal = HermesInternal;
      const typeError = new TypeError("Invalid operator: " + arg1);
      throw typeError;
  }
};
