// _runtime/metro/15426__.js
import _mod15373 from "15373__.js";
import _mod15407 from "15407__.js";
import _mod15424 from "15424__.js";

export default _mod15373
  ? (arg0, arg1, arg2) => _mod15424.f(arg0, arg1, _mod15407(1, arg2))
  : (arg0, arg1, arg2) => {
      arg0[arg1] = arg2;
      return arg0;
    };
