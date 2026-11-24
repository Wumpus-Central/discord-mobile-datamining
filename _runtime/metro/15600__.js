// _runtime/metro/15600__.js
import _mod15566 from "15566__.js";
import _mod15587 from "15587__.js";
import f2 from "../15601_f.js";
import _mod15611 from "15611__.js";
import _mod15612 from "15612__.js";

let closure_2 = _mod15566([].concat);

export default _mod15587("Reflect", "ownKeys") ||
  function ownKeys(arg0) {
    const fResult = f2.f(_mod15611(arg0));
    const f = _mod15612.f;
    let tmp2 = fResult;
    if (f) {
      tmp2 = closure_2(fResult, f(arg0));
    }
    return tmp2;
  };
