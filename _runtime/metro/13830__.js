// _runtime/metro/13830__.js
import _mod13796 from "13796__.js";
import _mod13817 from "13817__.js";
import f2 from "../13831_f.js";
import _mod13841 from "13841__.js";
import _mod13842 from "13842__.js";

let closure_2 = _mod13796([].concat);

export default _mod13817("Reflect", "ownKeys") ||
  function ownKeys(arg0) {
    const fResult = f2.f(_mod13841(arg0));
    const f = _mod13842.f;
    let tmp2 = fResult;
    if (f) {
      tmp2 = closure_2(fResult, f(arg0));
    }
    return tmp2;
  };
