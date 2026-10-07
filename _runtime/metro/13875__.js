// _runtime/metro/13875__.js
import _mod13869 from "13869__.js";
import _mod13870 from "13870__.js";
import _mod13871 from "13871__.js";
import _mod13872 from "13872__.js";
import _mod13873 from "13873__.js";
import _mod13874 from "13874__.js";

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
      let tmp13 = _mod13871;
      let tmp13Result = tmp13(version, version2, arg3);
      return tmp13Result;
    case "=":
      tmp13 = _mod13871;
      tmp13Result = tmp13(version, version2, arg3);
      return tmp13Result;
    case "==":
      tmp13 = _mod13871;
      tmp13Result = tmp13(version, version2, arg3);
      return tmp13Result;
    case "!=":
      return _mod13872(version, version2, arg3);
    case ">":
      return _mod13869(version, version2, arg3);
    case ">=":
      return _mod13873(version, version2, arg3);
    case "<":
      return _mod13870(version, version2, arg3);
    case "<=":
      return _mod13874(version, version2, arg3);
    default:
      const _TypeError = TypeError;
      const _HermesInternal = HermesInternal;
      const typeError = new TypeError("Invalid operator: " + arg1);
      throw typeError;
  }
};
