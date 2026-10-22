// _runtime/metro/15286__.js
import _mod15280 from "15280__.js";
import _mod15281 from "15281__.js";
import _mod15282 from "15282__.js";
import _mod15283 from "15283__.js";
import _mod15284 from "15284__.js";
import _mod15285 from "15285__.js";

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
      let tmp13 = _mod15282;
      let tmp13Result = tmp13(version, version2, arg3);
      return tmp13Result;
    case "=":
      tmp13 = _mod15282;
      tmp13Result = tmp13(version, version2, arg3);
      return tmp13Result;
    case "==":
      tmp13 = _mod15282;
      tmp13Result = tmp13(version, version2, arg3);
      return tmp13Result;
    case "!=":
      return _mod15283(version, version2, arg3);
    case ">":
      return _mod15280(version, version2, arg3);
    case ">=":
      return _mod15284(version, version2, arg3);
    case "<":
      return _mod15281(version, version2, arg3);
    case "<=":
      return _mod15285(version, version2, arg3);
    default:
      const _TypeError = TypeError;
      const _HermesInternal = HermesInternal;
      const typeError = new TypeError("Invalid operator: " + arg1);
      throw typeError;
  }
};
