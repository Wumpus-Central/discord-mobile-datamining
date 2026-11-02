// _runtime/metro/16184__.js
import _mod16131 from "16131__.js";
import _mod16165 from "16165__.js";
import _mod16182 from "16182__.js";

export default _mod16131
  ? (arg0, arg1, arg2) => _mod16182.f(arg0, arg1, _mod16165(1, arg2))
  : (arg0, arg1, arg2) => {
      arg0[arg1] = arg2;
      return arg0;
    };
