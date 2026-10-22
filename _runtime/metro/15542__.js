// _runtime/metro/15542__.js
import _mod15489 from "15489__.js";
import _mod15523 from "15523__.js";
import _mod15540 from "15540__.js";

export default _mod15489
  ? (arg0, arg1, arg2) => _mod15540.f(arg0, arg1, _mod15523(1, arg2))
  : (arg0, arg1, arg2) => {
      arg0[arg1] = arg2;
      return arg0;
    };
