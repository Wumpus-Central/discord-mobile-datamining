// _runtime/metro/15262__.js
import _mod15209 from "15209__.js";
import _mod15243 from "15243__.js";
import _mod15260 from "15260__.js";

export default _mod15209
  ? (arg0, arg1, arg2) => _mod15260.f(arg0, arg1, _mod15243(1, arg2))
  : (arg0, arg1, arg2) => {
      arg0[arg1] = arg2;
      return arg0;
    };
