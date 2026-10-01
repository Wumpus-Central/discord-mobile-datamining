// _runtime/metro/13789__.js
import _mod13783 from "13783__.js";
import _mod13784 from "13784__.js";
import _mod13785 from "13785__.js";
import _mod13786 from "13786__.js";
import _mod13787 from "13787__.js";
import _mod13788 from "13788__.js";

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
      let tmp13 = _mod13785;
      let tmp13Result = tmp13(version, version2, arg3);
      return tmp13Result;
    case "=":
      tmp13 = _mod13785;
      tmp13Result = tmp13(version, version2, arg3);
      return tmp13Result;
    case "==":
      tmp13 = _mod13785;
      tmp13Result = tmp13(version, version2, arg3);
      return tmp13Result;
    case "!=":
      return _mod13786(version, version2, arg3);
    case ">":
      return _mod13783(version, version2, arg3);
    case ">=":
      return _mod13787(version, version2, arg3);
    case "<":
      return _mod13784(version, version2, arg3);
    case "<=":
      return _mod13788(version, version2, arg3);
    default:
      const _TypeError = TypeError;
      const _HermesInternal = HermesInternal;
      const typeError = new TypeError("Invalid operator: " + arg1);
      throw typeError;
  }
};
