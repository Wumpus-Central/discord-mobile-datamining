// _runtime/metro/16429__.js
import _mod16376 from "16376__.js";
import _mod16410 from "16410__.js";
import _mod16427 from "16427__.js";

export default _mod16376
  ? (arg0, arg1, arg2) => _mod16427.f(arg0, arg1, _mod16410(1, arg2))
  : (arg0, arg1, arg2) => {
      arg0[arg1] = arg2;
      return arg0;
    };
