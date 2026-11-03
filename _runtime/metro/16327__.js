// _runtime/metro/16327__.js
import _mod16274 from "16274__.js";
import _mod16308 from "16308__.js";
import _mod16325 from "16325__.js";

export default _mod16274
  ? (arg0, arg1, arg2) => _mod16325.f(arg0, arg1, _mod16308(1, arg2))
  : (arg0, arg1, arg2) => {
      arg0[arg1] = arg2;
      return arg0;
    };
