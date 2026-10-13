// _runtime/metro/14673__.js
import _mod14667 from "14667__.js";
import _mod14668 from "14668__.js";
import _mod14669 from "14669__.js";
import _mod14670 from "14670__.js";
import _mod14671 from "14671__.js";
import _mod14672 from "14672__.js";

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
      let tmp13 = _mod14669;
      let tmp13Result = tmp13(version, version2, arg3);
      return tmp13Result;
    case "=":
      tmp13 = _mod14669;
      tmp13Result = tmp13(version, version2, arg3);
      return tmp13Result;
    case "==":
      tmp13 = _mod14669;
      tmp13Result = tmp13(version, version2, arg3);
      return tmp13Result;
    case "!=":
      return _mod14670(version, version2, arg3);
    case ">":
      return _mod14667(version, version2, arg3);
    case ">=":
      return _mod14671(version, version2, arg3);
    case "<":
      return _mod14668(version, version2, arg3);
    case "<=":
      return _mod14672(version, version2, arg3);
    default:
      const _TypeError = TypeError;
      const _HermesInternal = HermesInternal;
      const typeError = new TypeError("Invalid operator: " + arg1);
      throw typeError;
  }
};
