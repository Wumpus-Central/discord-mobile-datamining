// _runtime/metro/14329__.js
import _mod14323 from "14323__.js";
import _mod14324 from "14324__.js";
import _mod14325 from "14325__.js";
import _mod14326 from "14326__.js";
import _mod14327 from "14327__.js";
import _mod14328 from "14328__.js";

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
      let tmp13 = _mod14325;
      let tmp13Result = tmp13(version, version2, arg3);
      return tmp13Result;
    case "=":
      tmp13 = _mod14325;
      tmp13Result = tmp13(version, version2, arg3);
      return tmp13Result;
    case "==":
      tmp13 = _mod14325;
      tmp13Result = tmp13(version, version2, arg3);
      return tmp13Result;
    case "!=":
      return _mod14326(version, version2, arg3);
    case ">":
      return _mod14323(version, version2, arg3);
    case ">=":
      return _mod14327(version, version2, arg3);
    case "<":
      return _mod14324(version, version2, arg3);
    case "<=":
      return _mod14328(version, version2, arg3);
    default:
      const _TypeError = TypeError;
      const _HermesInternal = HermesInternal;
      const typeError = new TypeError("Invalid operator: " + arg1);
      throw typeError;
  }
};
