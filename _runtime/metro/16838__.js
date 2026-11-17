// _runtime/metro/16838__.js
import _mod16785 from "16785__.js";
import _mod16819 from "16819__.js";
import _mod16836 from "16836__.js";

export default _mod16785
  ? (arg0, arg1, arg2) => _mod16836.f(arg0, arg1, _mod16819(1, arg2))
  : (arg0, arg1, arg2) => {
      arg0[arg1] = arg2;
      return arg0;
    };
