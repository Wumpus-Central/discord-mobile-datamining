// _runtime/metro/15408__.js
import _mod15355 from "15355__.js";
import _mod15389 from "15389__.js";
import _mod15406 from "15406__.js";

export default _mod15355
  ? (arg0, arg1, arg2) => _mod15406.f(arg0, arg1, _mod15389(1, arg2))
  : (arg0, arg1, arg2) => {
      arg0[arg1] = arg2;
      return arg0;
    };
