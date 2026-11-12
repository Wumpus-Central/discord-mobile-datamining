// _runtime/metro/16680__.js
import _mod16627 from "16627__.js";
import _mod16661 from "16661__.js";
import _mod16678 from "16678__.js";

export default _mod16627
  ? (arg0, arg1, arg2) => _mod16678.f(arg0, arg1, _mod16661(1, arg2))
  : (arg0, arg1, arg2) => {
      arg0[arg1] = arg2;
      return arg0;
    };
