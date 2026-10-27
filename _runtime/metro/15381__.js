// _runtime/metro/15381__.js
import _mod15375 from "15375__.js";
import _mod15376 from "15376__.js";
import _mod15377 from "15377__.js";
import _mod15378 from "15378__.js";
import _mod15379 from "15379__.js";
import _mod15380 from "15380__.js";

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
      let tmp13 = _mod15377;
      let tmp13Result = tmp13(version, version2, arg3);
      return tmp13Result;
    case "=":
      tmp13 = _mod15377;
      tmp13Result = tmp13(version, version2, arg3);
      return tmp13Result;
    case "==":
      tmp13 = _mod15377;
      tmp13Result = tmp13(version, version2, arg3);
      return tmp13Result;
    case "!=":
      return _mod15378(version, version2, arg3);
    case ">":
      return _mod15375(version, version2, arg3);
    case ">=":
      return _mod15379(version, version2, arg3);
    case "<":
      return _mod15376(version, version2, arg3);
    case "<=":
      return _mod15380(version, version2, arg3);
    default:
      const _TypeError = TypeError;
      const _HermesInternal = HermesInternal;
      const typeError = new TypeError("Invalid operator: " + arg1);
      throw typeError;
  }
};
