// _runtime/metro/16439__.js
import _mod16386 from "16386__.js";
import _mod16420 from "16420__.js";
import _mod16437 from "16437__.js";

export default _mod16386
  ? (arg0, arg1, arg2) => _mod16437.f(arg0, arg1, _mod16420(1, arg2))
  : (arg0, arg1, arg2) => {
      arg0[arg1] = arg2;
      return arg0;
    };
