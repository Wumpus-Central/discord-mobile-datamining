// _runtime/metro/16788__.js
import _mod16754 from "16754__.js";
import _mod16775 from "16775__.js";
import f2 from "../16789_f.js";
import _mod16799 from "16799__.js";
import _mod16800 from "16800__.js";

let closure_2 = _mod16754([].concat);

export default _mod16775("Reflect", "ownKeys") ||
  function ownKeys(arg0) {
    const fResult = f2.f(_mod16799(arg0));
    const f = _mod16800.f;
    let tmp2 = fResult;
    if (f) {
      tmp2 = closure_2(fResult, f(arg0));
    }
    return tmp2;
  };
