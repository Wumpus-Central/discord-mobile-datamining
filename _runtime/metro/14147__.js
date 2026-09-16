// _runtime/metro/14147__.js
import _mod14141 from "14141__.js";
import _mod14142 from "14142__.js";
import _mod14143 from "14143__.js";
import _mod14144 from "14144__.js";
import _mod14145 from "14145__.js";
import _mod14146 from "14146__.js";

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
      let tmp13 = _mod14143;
      let tmp13Result = tmp13(version, version2, arg3);
      return tmp13Result;
    case "=":
      tmp13 = _mod14143;
      tmp13Result = tmp13(version, version2, arg3);
      return tmp13Result;
    case "==":
      tmp13 = _mod14143;
      tmp13Result = tmp13(version, version2, arg3);
      return tmp13Result;
    case "!=":
      return _mod14144(version, version2, arg3);
    case ">":
      return _mod14141(version, version2, arg3);
    case ">=":
      return _mod14145(version, version2, arg3);
    case "<":
      return _mod14142(version, version2, arg3);
    case "<=":
      return _mod14146(version, version2, arg3);
    default:
      const _TypeError = TypeError;
      const _HermesInternal = HermesInternal;
      const typeError = new TypeError("Invalid operator: " + arg1);
      throw typeError;
  }
};
