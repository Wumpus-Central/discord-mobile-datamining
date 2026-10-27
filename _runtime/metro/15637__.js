// _runtime/metro/15637__.js
import _mod15584 from "15584__.js";
import _mod15618 from "15618__.js";
import _mod15635 from "15635__.js";

export default _mod15584
  ? (arg0, arg1, arg2) => _mod15635.f(arg0, arg1, _mod15618(1, arg2))
  : (arg0, arg1, arg2) => {
      arg0[arg1] = arg2;
      return arg0;
    };
