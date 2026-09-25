// _runtime/metro/13889__.js
import _mod13836 from "13836__.js";
import _mod13870 from "13870__.js";
import _mod13887 from "13887__.js";

export default _mod13836
  ? (arg0, arg1, arg2) => _mod13887.f(arg0, arg1, _mod13870(1, arg2))
  : (arg0, arg1, arg2) => {
      arg0[arg1] = arg2;
      return arg0;
    };
