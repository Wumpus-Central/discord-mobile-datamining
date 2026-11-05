// _runtime/metro/16184__.js
import _mod16178 from "16178__.js";
import _mod16179 from "16179__.js";
import _mod16180 from "16180__.js";
import _mod16181 from "16181__.js";
import _mod16182 from "16182__.js";
import _mod16183 from "16183__.js";

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
      let tmp13 = _mod16180;
      let tmp13Result = tmp13(version, version2, arg3);
      return tmp13Result;
    case "=":
      tmp13 = _mod16180;
      tmp13Result = tmp13(version, version2, arg3);
      return tmp13Result;
    case "==":
      tmp13 = _mod16180;
      tmp13Result = tmp13(version, version2, arg3);
      return tmp13Result;
    case "!=":
      return _mod16181(version, version2, arg3);
    case ">":
      return _mod16178(version, version2, arg3);
    case ">=":
      return _mod16182(version, version2, arg3);
    case "<":
      return _mod16179(version, version2, arg3);
    case "<=":
      return _mod16183(version, version2, arg3);
    default:
      const _TypeError = TypeError;
      const _HermesInternal = HermesInternal;
      const typeError = new TypeError("Invalid operator: " + arg1);
      throw typeError;
  }
};
