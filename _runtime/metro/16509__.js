// _runtime/metro/16509__.js
import _mod16475 from "16475__.js";
import _mod16496 from "16496__.js";
import f2 from "../16510_f.js";
import _mod16520 from "16520__.js";
import _mod16521 from "16521__.js";

let closure_2 = _mod16475([].concat);

export default _mod16496("Reflect", "ownKeys") ||
  function ownKeys(arg0) {
    const fResult = f2.f(_mod16520(arg0));
    const f = _mod16521.f;
    let tmp2 = fResult;
    if (f) {
      tmp2 = closure_2(fResult, f(arg0));
    }
    return tmp2;
  };
