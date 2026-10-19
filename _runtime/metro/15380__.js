// _runtime/metro/15380__.js
import _mod15327 from "15327__.js";
import _mod15361 from "15361__.js";
import _mod15378 from "15378__.js";

export default _mod15327
  ? (arg0, arg1, arg2) => _mod15378.f(arg0, arg1, _mod15361(1, arg2))
  : (arg0, arg1, arg2) => {
      arg0[arg1] = arg2;
      return arg0;
    };
