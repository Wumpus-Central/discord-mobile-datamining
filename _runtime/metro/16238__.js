// _runtime/metro/16238__.js
import _mod16232 from "16232__.js";
import _mod16233 from "16233__.js";
import _mod16234 from "16234__.js";
import _mod16235 from "16235__.js";
import _mod16236 from "16236__.js";
import _mod16237 from "16237__.js";

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
      let tmp13 = _mod16234;
      let tmp13Result = tmp13(version, version2, arg3);
      return tmp13Result;
    case "=":
      tmp13 = _mod16234;
      tmp13Result = tmp13(version, version2, arg3);
      return tmp13Result;
    case "==":
      tmp13 = _mod16234;
      tmp13Result = tmp13(version, version2, arg3);
      return tmp13Result;
    case "!=":
      return _mod16235(version, version2, arg3);
    case ">":
      return _mod16232(version, version2, arg3);
    case ">=":
      return _mod16236(version, version2, arg3);
    case "<":
      return _mod16233(version, version2, arg3);
    case "<=":
      return _mod16237(version, version2, arg3);
    default:
      const _TypeError = TypeError;
      const _HermesInternal = HermesInternal;
      const typeError = new TypeError("Invalid operator: " + arg1);
      throw typeError;
  }
};
