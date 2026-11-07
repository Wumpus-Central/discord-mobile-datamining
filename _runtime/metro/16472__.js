// _runtime/metro/16472__.js
import _mod16438 from "16438__.js";
import _mod16459 from "16459__.js";
import f2 from "../16473_f.js";
import _mod16483 from "16483__.js";
import _mod16484 from "16484__.js";

let closure_2 = _mod16438([].concat);

export default _mod16459("Reflect", "ownKeys") ||
  function ownKeys(arg0) {
    const fResult = f2.f(_mod16483(arg0));
    const f = _mod16484.f;
    let tmp2 = fResult;
    if (f) {
      tmp2 = closure_2(fResult, f(arg0));
    }
    return tmp2;
  };
