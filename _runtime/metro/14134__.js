// _runtime/metro/14134__.js
import _mod14128 from "14128__.js";
import _mod14129 from "14129__.js";
import _mod14130 from "14130__.js";
import _mod14131 from "14131__.js";
import _mod14132 from "14132__.js";
import _mod14133 from "14133__.js";

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
      let tmp13 = _mod14130;
      let tmp13Result = tmp13(version, version2, arg3);
      return tmp13Result;
    case "=":
      tmp13 = _mod14130;
      tmp13Result = tmp13(version, version2, arg3);
      return tmp13Result;
    case "==":
      tmp13 = _mod14130;
      tmp13Result = tmp13(version, version2, arg3);
      return tmp13Result;
    case "!=":
      return _mod14131(version, version2, arg3);
    case ">":
      return _mod14128(version, version2, arg3);
    case ">=":
      return _mod14132(version, version2, arg3);
    case "<":
      return _mod14129(version, version2, arg3);
    case "<=":
      return _mod14133(version, version2, arg3);
    default:
      const _TypeError = TypeError;
      const _HermesInternal = HermesInternal;
      const typeError = new TypeError("Invalid operator: " + arg1);
      throw typeError;
  }
};
