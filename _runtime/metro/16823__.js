// _runtime/metro/16823__.js
import _mod16789 from "16789__.js";
import _mod16810 from "16810__.js";
import f2 from "../16824_f.js";
import _mod16834 from "16834__.js";
import _mod16835 from "16835__.js";

let closure_2 = _mod16789([].concat);

export default _mod16810("Reflect", "ownKeys") ||
  function ownKeys(arg0) {
    const fResult = f2.f(_mod16834(arg0));
    const f = _mod16835.f;
    let tmp2 = fResult;
    if (f) {
      tmp2 = closure_2(fResult, f(arg0));
    }
    return tmp2;
  };
