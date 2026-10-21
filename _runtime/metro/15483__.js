// _runtime/metro/15483__.js
import _mod15449 from "15449__.js";
import _mod15470 from "15470__.js";
import f2 from "../15484_f.js";
import _mod15494 from "15494__.js";
import _mod15495 from "15495__.js";

let closure_2 = _mod15449([].concat);

export default _mod15470("Reflect", "ownKeys") ||
  function ownKeys(arg0) {
    const fResult = f2.f(_mod15494(arg0));
    const f = _mod15495.f;
    let tmp2 = fResult;
    if (f) {
      tmp2 = closure_2(fResult, f(arg0));
    }
    return tmp2;
  };
