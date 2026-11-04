// _runtime/metro/16158__.js
import _mod16152 from "16152__.js";
import _mod16153 from "16153__.js";
import _mod16154 from "16154__.js";
import _mod16155 from "16155__.js";
import _mod16156 from "16156__.js";
import _mod16157 from "16157__.js";

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
      let tmp13 = _mod16154;
      let tmp13Result = tmp13(version, version2, arg3);
      return tmp13Result;
    case "=":
      tmp13 = _mod16154;
      tmp13Result = tmp13(version, version2, arg3);
      return tmp13Result;
    case "==":
      tmp13 = _mod16154;
      tmp13Result = tmp13(version, version2, arg3);
      return tmp13Result;
    case "!=":
      return _mod16155(version, version2, arg3);
    case ">":
      return _mod16152(version, version2, arg3);
    case ">=":
      return _mod16156(version, version2, arg3);
    case "<":
      return _mod16153(version, version2, arg3);
    case "<=":
      return _mod16157(version, version2, arg3);
    default:
      const _TypeError = TypeError;
      const _HermesInternal = HermesInternal;
      const typeError = new TypeError("Invalid operator: " + arg1);
      throw typeError;
  }
};
