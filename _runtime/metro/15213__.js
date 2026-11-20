// _runtime/metro/15213__.js
import _mod15207 from "15207__.js";
import _mod15208 from "15208__.js";
import _mod15209 from "15209__.js";
import _mod15210 from "15210__.js";
import _mod15211 from "15211__.js";
import _mod15212 from "15212__.js";

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
      let tmp13 = _mod15209;
      let tmp13Result = tmp13(version, version2, arg3);
      return tmp13Result;
    case "=":
      tmp13 = _mod15209;
      tmp13Result = tmp13(version, version2, arg3);
      return tmp13Result;
    case "==":
      tmp13 = _mod15209;
      tmp13Result = tmp13(version, version2, arg3);
      return tmp13Result;
    case "!=":
      return _mod15210(version, version2, arg3);
    case ">":
      return _mod15207(version, version2, arg3);
    case ">=":
      return _mod15211(version, version2, arg3);
    case "<":
      return _mod15208(version, version2, arg3);
    case "<=":
      return _mod15212(version, version2, arg3);
    default:
      const _TypeError = TypeError;
      const _HermesInternal = HermesInternal;
      const typeError = new TypeError("Invalid operator: " + arg1);
      throw typeError;
  }
};
