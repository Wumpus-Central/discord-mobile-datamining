// _runtime/metro/15863__.js
import _mod15810 from "15810__.js";
import _mod15844 from "15844__.js";
import _mod15861 from "15861__.js";

export default _mod15810
  ? (arg0, arg1, arg2) => _mod15861.f(arg0, arg1, _mod15844(1, arg2))
  : (arg0, arg1, arg2) => {
      arg0[arg1] = arg2;
      return arg0;
    };
