// _runtime/metro/14356__.js
import _mod14303 from "14303__.js";
import _mod14337 from "14337__.js";
import _mod14354 from "14354__.js";

export default _mod14303
  ? (arg0, arg1, arg2) => _mod14354.f(arg0, arg1, _mod14337(1, arg2))
  : (arg0, arg1, arg2) => {
      arg0[arg1] = arg2;
      return arg0;
    };
