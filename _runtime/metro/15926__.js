// _runtime/metro/15926__.js
import _mod15920 from "15920__.js";
import _mod15921 from "15921__.js";
import _mod15922 from "15922__.js";
import _mod15923 from "15923__.js";
import _mod15924 from "15924__.js";
import _mod15925 from "15925__.js";

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
      let tmp13 = _mod15922;
      let tmp13Result = tmp13(version, version2, arg3);
      return tmp13Result;
    case "=":
      tmp13 = _mod15922;
      tmp13Result = tmp13(version, version2, arg3);
      return tmp13Result;
    case "==":
      tmp13 = _mod15922;
      tmp13Result = tmp13(version, version2, arg3);
      return tmp13Result;
    case "!=":
      return _mod15923(version, version2, arg3);
    case ">":
      return _mod15920(version, version2, arg3);
    case ">=":
      return _mod15924(version, version2, arg3);
    case "<":
      return _mod15921(version, version2, arg3);
    case "<=":
      return _mod15925(version, version2, arg3);
    default:
      const _TypeError = TypeError;
      const _HermesInternal = HermesInternal;
      const typeError = new TypeError("Invalid operator: " + arg1);
      throw typeError;
  }
};
