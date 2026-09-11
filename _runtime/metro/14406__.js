// _runtime/metro/14406__.js
import _mod14353 from "14353__.js";
import _mod14387 from "14387__.js";
import _mod14404 from "14404__.js";

export default _mod14353
  ? (arg0, arg1, arg2) => _mod14404.f(arg0, arg1, _mod14387(1, arg2))
  : (arg0, arg1, arg2) => {
      arg0[arg1] = arg2;
      return arg0;
    };
