// _runtime/metro/16416__.js
import _mod16363 from "16363__.js";
import _mod16397 from "16397__.js";
import _mod16414 from "16414__.js";

export default _mod16363
  ? (arg0, arg1, arg2) => _mod16414.f(arg0, arg1, _mod16397(1, arg2))
  : (arg0, arg1, arg2) => {
      arg0[arg1] = arg2;
      return arg0;
    };
