// _runtime/metro/15249__.js
import _mod15243 from "15243__.js";
import _mod15244 from "15244__.js";
import _mod15245 from "15245__.js";
import _mod15246 from "15246__.js";
import _mod15247 from "15247__.js";
import _mod15248 from "15248__.js";

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
      let tmp13 = _mod15245;
      let tmp13Result = tmp13(version, version2, arg3);
      return tmp13Result;
    case "=":
      tmp13 = _mod15245;
      tmp13Result = tmp13(version, version2, arg3);
      return tmp13Result;
    case "==":
      tmp13 = _mod15245;
      tmp13Result = tmp13(version, version2, arg3);
      return tmp13Result;
    case "!=":
      return _mod15246(version, version2, arg3);
    case ">":
      return _mod15243(version, version2, arg3);
    case ">=":
      return _mod15247(version, version2, arg3);
    case "<":
      return _mod15244(version, version2, arg3);
    case "<=":
      return _mod15248(version, version2, arg3);
    default:
      const _TypeError = TypeError;
      const _HermesInternal = HermesInternal;
      const typeError = new TypeError("Invalid operator: " + arg1);
      throw typeError;
  }
};
