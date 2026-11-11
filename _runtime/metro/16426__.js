// _runtime/metro/16426__.js
import _mod16420 from "16420__.js";
import _mod16421 from "16421__.js";
import _mod16422 from "16422__.js";
import _mod16423 from "16423__.js";
import _mod16424 from "16424__.js";
import _mod16425 from "16425__.js";

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
      let tmp13 = _mod16422;
      let tmp13Result = tmp13(version, version2, arg3);
      return tmp13Result;
    case "=":
      tmp13 = _mod16422;
      tmp13Result = tmp13(version, version2, arg3);
      return tmp13Result;
    case "==":
      tmp13 = _mod16422;
      tmp13Result = tmp13(version, version2, arg3);
      return tmp13Result;
    case "!=":
      return _mod16423(version, version2, arg3);
    case ">":
      return _mod16420(version, version2, arg3);
    case ">=":
      return _mod16424(version, version2, arg3);
    case "<":
      return _mod16421(version, version2, arg3);
    case "<=":
      return _mod16425(version, version2, arg3);
    default:
      const _TypeError = TypeError;
      const _HermesInternal = HermesInternal;
      const typeError = new TypeError("Invalid operator: " + arg1);
      throw typeError;
  }
};
