// _runtime/metro/14352__.js
import _mod14346 from "14346__.js";
import _mod14347 from "14347__.js";
import _mod14348 from "14348__.js";
import _mod14349 from "14349__.js";
import _mod14350 from "14350__.js";
import _mod14351 from "14351__.js";

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
      let tmp13 = _mod14348;
      let tmp13Result = tmp13(version, version2, arg3);
      return tmp13Result;
    case "=":
      tmp13 = _mod14348;
      tmp13Result = tmp13(version, version2, arg3);
      return tmp13Result;
    case "==":
      tmp13 = _mod14348;
      tmp13Result = tmp13(version, version2, arg3);
      return tmp13Result;
    case "!=":
      return _mod14349(version, version2, arg3);
    case ">":
      return _mod14346(version, version2, arg3);
    case ">=":
      return _mod14350(version, version2, arg3);
    case "<":
      return _mod14347(version, version2, arg3);
    case "<=":
      return _mod14351(version, version2, arg3);
    default:
      const _TypeError = TypeError;
      const _HermesInternal = HermesInternal;
      const typeError = new TypeError("Invalid operator: " + arg1);
      throw typeError;
  }
};
