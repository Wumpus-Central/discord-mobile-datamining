// _runtime/metro/16665__.js
import _mod16631 from "16631__.js";
import _mod16652 from "16652__.js";
import f2 from "../16666_f.js";
import _mod16676 from "16676__.js";
import _mod16677 from "16677__.js";

let closure_2 = _mod16631([].concat);

export default _mod16652("Reflect", "ownKeys") ||
  function ownKeys(arg0) {
    const fResult = f2.f(_mod16676(arg0));
    const f = _mod16677.f;
    let tmp2 = fResult;
    if (f) {
      tmp2 = closure_2(fResult, f(arg0));
    }
    return tmp2;
  };
