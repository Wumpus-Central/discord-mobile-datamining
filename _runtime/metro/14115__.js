// _runtime/metro/14115__.js
import _mod14062 from "14062__.js";
import _mod14096 from "14096__.js";
import _mod14113 from "14113__.js";

export default _mod14062
  ? (arg0, arg1, arg2) => _mod14113.f(arg0, arg1, _mod14096(1, arg2))
  : (arg0, arg1, arg2) => {
      arg0[arg1] = arg2;
      return arg0;
    };
