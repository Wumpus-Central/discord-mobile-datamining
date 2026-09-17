// _runtime/metro/14155__.js
import _mod14149 from "14149__.js";
import _mod14150 from "14150__.js";
import _mod14151 from "14151__.js";
import _mod14152 from "14152__.js";
import _mod14153 from "14153__.js";
import _mod14154 from "14154__.js";

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
      let tmp13 = _mod14151;
      let tmp13Result = tmp13(version, version2, arg3);
      return tmp13Result;
    case "=":
      tmp13 = _mod14151;
      tmp13Result = tmp13(version, version2, arg3);
      return tmp13Result;
    case "==":
      tmp13 = _mod14151;
      tmp13Result = tmp13(version, version2, arg3);
      return tmp13Result;
    case "!=":
      return _mod14152(version, version2, arg3);
    case ">":
      return _mod14149(version, version2, arg3);
    case ">=":
      return _mod14153(version, version2, arg3);
    case "<":
      return _mod14150(version, version2, arg3);
    case "<=":
      return _mod14154(version, version2, arg3);
    default:
      const _TypeError = TypeError;
      const _HermesInternal = HermesInternal;
      const typeError = new TypeError("Invalid operator: " + arg1);
      throw typeError;
  }
};
