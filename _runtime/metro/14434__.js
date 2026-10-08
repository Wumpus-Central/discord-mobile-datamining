// _runtime/metro/14434__.js
import _mod14381 from "14381__.js";
import _mod14415 from "14415__.js";
import _mod14432 from "14432__.js";

export default _mod14381
  ? (arg0, arg1, arg2) => _mod14432.f(arg0, arg1, _mod14415(1, arg2))
  : (arg0, arg1, arg2) => {
      arg0[arg1] = arg2;
      return arg0;
    };
