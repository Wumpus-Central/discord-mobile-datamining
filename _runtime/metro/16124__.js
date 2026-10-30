// _runtime/metro/16124__.js
import _mod16090 from "16090__.js";
import _mod16111 from "16111__.js";
import f2 from "../16125_f.js";
import _mod16135 from "16135__.js";
import _mod16136 from "16136__.js";

let closure_2 = _mod16090([].concat);

export default _mod16111("Reflect", "ownKeys") ||
  function ownKeys(arg0) {
    const fResult = f2.f(_mod16135(arg0));
    const f = _mod16136.f;
    let tmp2 = fResult;
    if (f) {
      tmp2 = closure_2(fResult, f(arg0));
    }
    return tmp2;
  };
