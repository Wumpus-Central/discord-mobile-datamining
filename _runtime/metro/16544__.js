// _runtime/metro/16544__.js
import _mod16538 from "16538__.js";
import _mod16539 from "16539__.js";
import _mod16540 from "16540__.js";
import _mod16541 from "16541__.js";
import _mod16542 from "16542__.js";
import _mod16543 from "16543__.js";

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
      let tmp13 = _mod16540;
      let tmp13Result = tmp13(version, version2, arg3);
      return tmp13Result;
    case "=":
      tmp13 = _mod16540;
      tmp13Result = tmp13(version, version2, arg3);
      return tmp13Result;
    case "==":
      tmp13 = _mod16540;
      tmp13Result = tmp13(version, version2, arg3);
      return tmp13Result;
    case "!=":
      return _mod16541(version, version2, arg3);
    case ">":
      return _mod16538(version, version2, arg3);
    case ">=":
      return _mod16542(version, version2, arg3);
    case "<":
      return _mod16539(version, version2, arg3);
    case "<=":
      return _mod16543(version, version2, arg3);
    default:
      const _TypeError = TypeError;
      const _HermesInternal = HermesInternal;
      const typeError = new TypeError("Invalid operator: " + arg1);
      throw typeError;
  }
};
