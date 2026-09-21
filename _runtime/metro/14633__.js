// _runtime/metro/14633__.js
import _mod14580 from "14580__.js";
import _mod14614 from "14614__.js";
import _mod14631 from "14631__.js";

export default _mod14580
  ? (arg0, arg1, arg2) => _mod14631.f(arg0, arg1, _mod14614(1, arg2))
  : (arg0, arg1, arg2) => {
      arg0[arg1] = arg2;
      return arg0;
    };
