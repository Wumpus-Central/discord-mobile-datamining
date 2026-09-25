// _runtime/metro/13568__.js
import _mod13562 from "13562__.js";
import _mod13563 from "13563__.js";
import _mod13564 from "13564__.js";
import _mod13565 from "13565__.js";
import _mod13566 from "13566__.js";
import _mod13567 from "13567__.js";

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
      let tmp13 = _mod13564;
      let tmp13Result = tmp13(version, version2, arg3);
      return tmp13Result;
    case "=":
      tmp13 = _mod13564;
      tmp13Result = tmp13(version, version2, arg3);
      return tmp13Result;
    case "==":
      tmp13 = _mod13564;
      tmp13Result = tmp13(version, version2, arg3);
      return tmp13Result;
    case "!=":
      return _mod13565(version, version2, arg3);
    case ">":
      return _mod13562(version, version2, arg3);
    case ">=":
      return _mod13566(version, version2, arg3);
    case "<":
      return _mod13563(version, version2, arg3);
    case "<=":
      return _mod13567(version, version2, arg3);
    default:
      const _TypeError = TypeError;
      const _HermesInternal = HermesInternal;
      const typeError = new TypeError("Invalid operator: " + arg1);
      throw typeError;
  }
};
