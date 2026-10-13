// _runtime/metro/14913__.js
import _mod14879 from "14879__.js";
import _mod14900 from "14900__.js";
import f2 from "../14914_f.js";
import _mod14924 from "14924__.js";
import _mod14925 from "14925__.js";

let closure_2 = _mod14879([].concat);

export default _mod14900("Reflect", "ownKeys") ||
  function ownKeys(arg0) {
    const fResult = f2.f(_mod14924(arg0));
    const f = _mod14925.f;
    let tmp2 = fResult;
    if (f) {
      tmp2 = closure_2(fResult, f(arg0));
    }
    return tmp2;
  };
