// _runtime/metro/13855__.js
import _mod13849 from "13849__.js";
import _mod13850 from "13850__.js";
import _mod13851 from "13851__.js";
import _mod13852 from "13852__.js";
import _mod13853 from "13853__.js";
import _mod13854 from "13854__.js";

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
      let tmp13 = _mod13851;
      let tmp13Result = tmp13(version, version2, arg3);
      return tmp13Result;
    case "=":
      tmp13 = _mod13851;
      tmp13Result = tmp13(version, version2, arg3);
      return tmp13Result;
    case "==":
      tmp13 = _mod13851;
      tmp13Result = tmp13(version, version2, arg3);
      return tmp13Result;
    case "!=":
      return _mod13852(version, version2, arg3);
    case ">":
      return _mod13849(version, version2, arg3);
    case ">=":
      return _mod13853(version, version2, arg3);
    case "<":
      return _mod13850(version, version2, arg3);
    case "<=":
      return _mod13854(version, version2, arg3);
    default:
      const _TypeError = TypeError;
      const _HermesInternal = HermesInternal;
      const typeError = new TypeError("Invalid operator: " + arg1);
      throw typeError;
  }
};
