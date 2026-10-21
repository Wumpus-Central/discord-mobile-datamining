// _runtime/metro/15242__.js
import _mod15236 from "15236__.js";
import _mod15237 from "15237__.js";
import _mod15238 from "15238__.js";
import _mod15239 from "15239__.js";
import _mod15240 from "15240__.js";
import _mod15241 from "15241__.js";

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
      let tmp13 = _mod15238;
      let tmp13Result = tmp13(version, version2, arg3);
      return tmp13Result;
    case "=":
      tmp13 = _mod15238;
      tmp13Result = tmp13(version, version2, arg3);
      return tmp13Result;
    case "==":
      tmp13 = _mod15238;
      tmp13Result = tmp13(version, version2, arg3);
      return tmp13Result;
    case "!=":
      return _mod15239(version, version2, arg3);
    case ">":
      return _mod15236(version, version2, arg3);
    case ">=":
      return _mod15240(version, version2, arg3);
    case "<":
      return _mod15237(version, version2, arg3);
    case "<=":
      return _mod15241(version, version2, arg3);
    default:
      const _TypeError = TypeError;
      const _HermesInternal = HermesInternal;
      const typeError = new TypeError("Invalid operator: " + arg1);
      throw typeError;
  }
};
