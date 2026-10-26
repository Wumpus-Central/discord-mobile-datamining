// _runtime/metro/15586__.js
import _mod15552 from "15552__.js";
import _mod15573 from "15573__.js";
import f2 from "../15587_f.js";
import _mod15597 from "15597__.js";
import _mod15598 from "15598__.js";

let closure_2 = _mod15552([].concat);

export default _mod15573("Reflect", "ownKeys") ||
  function ownKeys(arg0) {
    const fResult = f2.f(_mod15597(arg0));
    const f = _mod15598.f;
    let tmp2 = fResult;
    if (f) {
      tmp2 = closure_2(fResult, f(arg0));
    }
    return tmp2;
  };
