// _runtime/metro/14068__.js
import _mod14062 from "14062__.js";
import _mod14063 from "14063__.js";
import _mod14064 from "14064__.js";
import _mod14065 from "14065__.js";
import _mod14066 from "14066__.js";
import _mod14067 from "14067__.js";

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
      let tmp13 = _mod14064;
      let tmp13Result = tmp13(version, version2, arg3);
      return tmp13Result;
    case "=":
      tmp13 = _mod14064;
      tmp13Result = tmp13(version, version2, arg3);
      return tmp13Result;
    case "==":
      tmp13 = _mod14064;
      tmp13Result = tmp13(version, version2, arg3);
      return tmp13Result;
    case "!=":
      return _mod14065(version, version2, arg3);
    case ">":
      return _mod14062(version, version2, arg3);
    case ">=":
      return _mod14066(version, version2, arg3);
    case "<":
      return _mod14063(version, version2, arg3);
    case "<=":
      return _mod14067(version, version2, arg3);
    default:
      const _TypeError = TypeError;
      const _HermesInternal = HermesInternal;
      const typeError = new TypeError("Invalid operator: " + arg1);
      throw typeError;
  }
};
