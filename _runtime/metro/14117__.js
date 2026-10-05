// _runtime/metro/14117__.js
import _mod14064 from "14064__.js";
import _mod14098 from "14098__.js";
import defineProperty2 from "../14115_defineProperty2.js";

export default _mod14064
  ? (arg0, arg1, arg2) => {
      const obj = defineProperty2;
      return obj.f(arg0, arg1, _mod14098(1, arg2));
    }
  : (arg0, arg1, arg2) => {
      arg0[arg1] = arg2;
      return arg0;
    };
