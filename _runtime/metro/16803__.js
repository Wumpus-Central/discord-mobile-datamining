// _runtime/metro/16803__.js
import _mod16750 from "16750__.js";
import _mod16784 from "16784__.js";
import _mod16801 from "16801__.js";

export default _mod16750
  ? (arg0, arg1, arg2) => _mod16801.f(arg0, arg1, _mod16784(1, arg2))
  : (arg0, arg1, arg2) => {
      arg0[arg1] = arg2;
      return arg0;
    };
