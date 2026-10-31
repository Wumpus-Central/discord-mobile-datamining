// _runtime/metro/15922__.js
import _mod15916 from "15916__.js";
import _mod15917 from "15917__.js";
import _mod15918 from "15918__.js";
import _mod15919 from "15919__.js";
import _mod15920 from "15920__.js";
import _mod15921 from "15921__.js";

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
      let tmp13 = _mod15918;
      let tmp13Result = tmp13(version, version2, arg3);
      return tmp13Result;
    case "=":
      tmp13 = _mod15918;
      tmp13Result = tmp13(version, version2, arg3);
      return tmp13Result;
    case "==":
      tmp13 = _mod15918;
      tmp13Result = tmp13(version, version2, arg3);
      return tmp13Result;
    case "!=":
      return _mod15919(version, version2, arg3);
    case ">":
      return _mod15916(version, version2, arg3);
    case ">=":
      return _mod15920(version, version2, arg3);
    case "<":
      return _mod15917(version, version2, arg3);
    case "<=":
      return _mod15921(version, version2, arg3);
    default:
      const _TypeError = TypeError;
      const _HermesInternal = HermesInternal;
      const typeError = new TypeError("Invalid operator: " + arg1);
      throw typeError;
  }
};
