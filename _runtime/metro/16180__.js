// _runtime/metro/16180__.js
import _mod16127 from "16127__.js";
import _mod16161 from "16161__.js";
import _mod16178 from "16178__.js";

export default _mod16127
  ? (arg0, arg1, arg2) => _mod16178.f(arg0, arg1, _mod16161(1, arg2))
  : (arg0, arg1, arg2) => {
      arg0[arg1] = arg2;
      return arg0;
    };
