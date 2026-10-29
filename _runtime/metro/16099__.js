// _runtime/metro/16099__.js
import _mod16046 from "16046__.js";
import _mod16080 from "16080__.js";
import _mod16097 from "16097__.js";

export default _mod16046
  ? (arg0, arg1, arg2) => _mod16097.f(arg0, arg1, _mod16080(1, arg2))
  : (arg0, arg1, arg2) => {
      arg0[arg1] = arg2;
      return arg0;
    };
