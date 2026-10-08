// _runtime/metro/14178__.js
import _mod14172 from "14172__.js";
import _mod14173 from "14173__.js";
import _mod14174 from "14174__.js";
import _mod14175 from "14175__.js";
import _mod14176 from "14176__.js";
import _mod14177 from "14177__.js";

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
      let tmp13 = _mod14174;
      let tmp13Result = tmp13(version, version2, arg3);
      return tmp13Result;
    case "=":
      tmp13 = _mod14174;
      tmp13Result = tmp13(version, version2, arg3);
      return tmp13Result;
    case "==":
      tmp13 = _mod14174;
      tmp13Result = tmp13(version, version2, arg3);
      return tmp13Result;
    case "!=":
      return _mod14175(version, version2, arg3);
    case ">":
      return _mod14172(version, version2, arg3);
    case ">=":
      return _mod14176(version, version2, arg3);
    case "<":
      return _mod14173(version, version2, arg3);
    case "<=":
      return _mod14177(version, version2, arg3);
    default:
      const _TypeError = TypeError;
      const _HermesInternal = HermesInternal;
      const typeError = new TypeError("Invalid operator: " + arg1);
      throw typeError;
  }
};
