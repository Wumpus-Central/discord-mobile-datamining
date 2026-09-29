// _runtime/metro/14013__.js
import _mod13960 from "13960__.js";
import _mod13994 from "13994__.js";
import _mod14011 from "14011__.js";

export default _mod13960
  ? (arg0, arg1, arg2) => _mod14011.f(arg0, arg1, _mod13994(1, arg2))
  : (arg0, arg1, arg2) => {
      arg0[arg1] = arg2;
      return arg0;
    };
