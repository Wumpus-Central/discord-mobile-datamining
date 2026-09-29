// _runtime/metro/13754__.js
import _mod13748 from "13748__.js";
import _mod13749 from "13749__.js";
import _mod13750 from "13750__.js";
import _mod13751 from "13751__.js";
import _mod13752 from "13752__.js";
import _mod13753 from "13753__.js";

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
      let tmp13 = _mod13750;
      let tmp13Result = tmp13(version, version2, arg3);
      return tmp13Result;
    case "=":
      tmp13 = _mod13750;
      tmp13Result = tmp13(version, version2, arg3);
      return tmp13Result;
    case "==":
      tmp13 = _mod13750;
      tmp13Result = tmp13(version, version2, arg3);
      return tmp13Result;
    case "!=":
      return _mod13751(version, version2, arg3);
    case ">":
      return _mod13748(version, version2, arg3);
    case ">=":
      return _mod13752(version, version2, arg3);
    case "<":
      return _mod13749(version, version2, arg3);
    case "<=":
      return _mod13753(version, version2, arg3);
    default:
      const _TypeError = TypeError;
      const _HermesInternal = HermesInternal;
      const typeError = new TypeError("Invalid operator: " + arg1);
      throw typeError;
  }
};
