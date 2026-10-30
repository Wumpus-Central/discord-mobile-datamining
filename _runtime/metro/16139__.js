// _runtime/metro/16139__.js
import _mod16086 from "16086__.js";
import _mod16120 from "16120__.js";
import _mod16137 from "16137__.js";

export default _mod16086
  ? (arg0, arg1, arg2) => _mod16137.f(arg0, arg1, _mod16120(1, arg2))
  : (arg0, arg1, arg2) => {
      arg0[arg1] = arg2;
      return arg0;
    };
