// _runtime/metro/15479__.js
import _mod15473 from "15473__.js";
import _mod15474 from "15474__.js";
import _mod15475 from "15475__.js";
import _mod15476 from "15476__.js";
import _mod15477 from "15477__.js";
import _mod15478 from "15478__.js";

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
      let tmp13 = _mod15475;
      let tmp13Result = tmp13(version, version2, arg3);
      return tmp13Result;
    case "=":
      tmp13 = _mod15475;
      tmp13Result = tmp13(version, version2, arg3);
      return tmp13Result;
    case "==":
      tmp13 = _mod15475;
      tmp13Result = tmp13(version, version2, arg3);
      return tmp13Result;
    case "!=":
      return _mod15476(version, version2, arg3);
    case ">":
      return _mod15473(version, version2, arg3);
    case ">=":
      return _mod15477(version, version2, arg3);
    case "<":
      return _mod15474(version, version2, arg3);
    case "<=":
      return _mod15478(version, version2, arg3);
    default:
      const _TypeError = TypeError;
      const _HermesInternal = HermesInternal;
      const typeError = new TypeError("Invalid operator: " + arg1);
      throw typeError;
  }
};
