// _runtime/metro/14135__.js
import _mod14082 from "14082__.js";
import _mod14116 from "14116__.js";
import defineProperty2 from "../14133_defineProperty2.js";

export default _mod14082
  ? (arg0, arg1, arg2) => {
      const obj = defineProperty2;
      return obj.f(arg0, arg1, _mod14116(1, arg2));
    }
  : (arg0, arg1, arg2) => {
      arg0[arg1] = arg2;
      return arg0;
    };
