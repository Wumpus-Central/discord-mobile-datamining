// _runtime/metro/14093__.js
import _mod14087 from "14087__.js";
import _mod14088 from "14088__.js";
import _mod14089 from "14089__.js";
import _mod14090 from "14090__.js";
import _mod14091 from "14091__.js";
import _mod14092 from "14092__.js";

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
      let tmp13 = _mod14089;
      let tmp13Result = tmp13(version, version2, arg3);
      return tmp13Result;
    case "=":
      tmp13 = _mod14089;
      tmp13Result = tmp13(version, version2, arg3);
      return tmp13Result;
    case "==":
      tmp13 = _mod14089;
      tmp13Result = tmp13(version, version2, arg3);
      return tmp13Result;
    case "!=":
      return _mod14090(version, version2, arg3);
    case ">":
      return _mod14087(version, version2, arg3);
    case ">=":
      return _mod14091(version, version2, arg3);
    case "<":
      return _mod14088(version, version2, arg3);
    case "<=":
      return _mod14092(version, version2, arg3);
    default:
      const _TypeError = TypeError;
      const _HermesInternal = HermesInternal;
      const typeError = new TypeError("Invalid operator: " + arg1);
      throw typeError;
  }
};
