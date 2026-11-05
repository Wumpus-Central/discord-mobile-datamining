// _runtime/metro/16442__.js
import _mod16389 from "16389__.js";
import _mod16423 from "16423__.js";
import _mod16440 from "16440__.js";

export default _mod16389
  ? (arg0, arg1, arg2) => _mod16440.f(arg0, arg1, _mod16423(1, arg2))
  : (arg0, arg1, arg2) => {
      arg0[arg1] = arg2;
      return arg0;
    };
