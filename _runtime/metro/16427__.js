// _runtime/metro/16427__.js
import _mod16393 from "16393__.js";
import _mod16414 from "16414__.js";
import f2 from "../16428_f.js";
import _mod16438 from "16438__.js";
import _mod16439 from "16439__.js";

let closure_2 = _mod16393([].concat);

export default _mod16414("Reflect", "ownKeys") ||
  function ownKeys(arg0) {
    const fResult = f2.f(_mod16438(arg0));
    const f = _mod16439.f;
    let tmp2 = fResult;
    if (f) {
      tmp2 = closure_2(fResult, f(arg0));
    }
    return tmp2;
  };
