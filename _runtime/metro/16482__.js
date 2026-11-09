// _runtime/metro/16482__.js
import _mod16448 from "16448__.js";
import _mod16469 from "16469__.js";
import f2 from "../16483_f.js";
import _mod16493 from "16493__.js";
import _mod16494 from "16494__.js";

let closure_2 = _mod16448([].concat);

export default _mod16469("Reflect", "ownKeys") ||
  function ownKeys(arg0) {
    const fResult = f2.f(_mod16493(arg0));
    const f = _mod16494.f;
    let tmp2 = fResult;
    if (f) {
      tmp2 = closure_2(fResult, f(arg0));
    }
    return tmp2;
  };
