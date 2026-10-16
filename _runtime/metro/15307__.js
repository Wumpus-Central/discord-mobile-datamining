// _runtime/metro/15307__.js
import _mod15254 from "15254__.js";
import _mod15288 from "15288__.js";
import _mod15305 from "15305__.js";

export default _mod15254
  ? (arg0, arg1, arg2) => _mod15305.f(arg0, arg1, _mod15288(1, arg2))
  : (arg0, arg1, arg2) => {
      arg0[arg1] = arg2;
      return arg0;
    };
