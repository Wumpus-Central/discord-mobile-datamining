// _runtime/metro/14025__.js
import _mod13991 from "13991__.js";
import _mod14012 from "14012__.js";
import f2 from "../14026_f.js";
import _mod14036 from "14036__.js";
import _mod14037 from "14037__.js";

let closure_2 = _mod13991([].concat);

export default _mod14012("Reflect", "ownKeys") ||
  function ownKeys(arg0) {
    const fResult = f2.f(_mod14036(arg0));
    const f = _mod14037.f;
    let tmp2 = fResult;
    if (f) {
      tmp2 = closure_2(fResult, f(arg0));
    }
    return tmp2;
  };
