// _runtime/metro/15601__.js
import _mod15548 from "15548__.js";
import _mod15582 from "15582__.js";
import _mod15599 from "15599__.js";

export default _mod15548
  ? (arg0, arg1, arg2) => _mod15599.f(arg0, arg1, _mod15582(1, arg2))
  : (arg0, arg1, arg2) => {
      arg0[arg1] = arg2;
      return arg0;
    };
