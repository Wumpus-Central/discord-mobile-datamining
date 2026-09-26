// _runtime/metro/13586__.js
import _mod13580 from "13580__.js";
import _mod13581 from "13581__.js";
import _mod13582 from "13582__.js";
import _mod13583 from "13583__.js";
import _mod13584 from "13584__.js";
import _mod13585 from "13585__.js";

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
      let tmp13 = _mod13582;
      let tmp13Result = tmp13(version, version2, arg3);
      return tmp13Result;
    case "=":
      tmp13 = _mod13582;
      tmp13Result = tmp13(version, version2, arg3);
      return tmp13Result;
    case "==":
      tmp13 = _mod13582;
      tmp13Result = tmp13(version, version2, arg3);
      return tmp13Result;
    case "!=":
      return _mod13583(version, version2, arg3);
    case ">":
      return _mod13580(version, version2, arg3);
    case ">=":
      return _mod13584(version, version2, arg3);
    case "<":
      return _mod13581(version, version2, arg3);
    case "<=":
      return _mod13585(version, version2, arg3);
    default:
      const _TypeError = TypeError;
      const _HermesInternal = HermesInternal;
      const typeError = new TypeError("Invalid operator: " + arg1);
      throw typeError;
  }
};
