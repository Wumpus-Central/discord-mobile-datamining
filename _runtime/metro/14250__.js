// _runtime/metro/14250__.js
import _mod14244 from "14244__.js";
import _mod14245 from "14245__.js";
import _mod14246 from "14246__.js";
import _mod14247 from "14247__.js";
import _mod14248 from "14248__.js";
import _mod14249 from "14249__.js";

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
      let tmp13 = _mod14246;
      let tmp13Result = tmp13(version, version2, arg3);
      return tmp13Result;
    case "=":
      tmp13 = _mod14246;
      tmp13Result = tmp13(version, version2, arg3);
      return tmp13Result;
    case "==":
      tmp13 = _mod14246;
      tmp13Result = tmp13(version, version2, arg3);
      return tmp13Result;
    case "!=":
      return _mod14247(version, version2, arg3);
    case ">":
      return _mod14244(version, version2, arg3);
    case ">=":
      return _mod14248(version, version2, arg3);
    case "<":
      return _mod14245(version, version2, arg3);
    case "<=":
      return _mod14249(version, version2, arg3);
    default:
      const _TypeError = TypeError;
      const _HermesInternal = HermesInternal;
      const typeError = new TypeError("Invalid operator: " + arg1);
      throw typeError;
  }
};
