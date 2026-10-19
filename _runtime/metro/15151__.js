// _runtime/metro/15151__.js
import _mod15145 from "15145__.js";
import _mod15146 from "15146__.js";
import _mod15147 from "15147__.js";
import _mod15148 from "15148__.js";
import _mod15149 from "15149__.js";
import _mod15150 from "15150__.js";

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
      let tmp13 = _mod15147;
      let tmp13Result = tmp13(version, version2, arg3);
      return tmp13Result;
    case "=":
      tmp13 = _mod15147;
      tmp13Result = tmp13(version, version2, arg3);
      return tmp13Result;
    case "==":
      tmp13 = _mod15147;
      tmp13Result = tmp13(version, version2, arg3);
      return tmp13Result;
    case "!=":
      return _mod15148(version, version2, arg3);
    case ">":
      return _mod15145(version, version2, arg3);
    case ">=":
      return _mod15149(version, version2, arg3);
    case "<":
      return _mod15146(version, version2, arg3);
    case "<=":
      return _mod15150(version, version2, arg3);
    default:
      const _TypeError = TypeError;
      const _HermesInternal = HermesInternal;
      const typeError = new TypeError("Invalid operator: " + arg1);
      throw typeError;
  }
};
