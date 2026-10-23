// _runtime/metro/15561__.js
import _mod15527 from "15527__.js";
import _mod15548 from "15548__.js";
import f2 from "../15562_f.js";
import _mod15572 from "15572__.js";
import _mod15573 from "15573__.js";

let closure_2 = _mod15527([].concat);

export default _mod15548("Reflect", "ownKeys") ||
  function ownKeys(arg0) {
    const fResult = f2.f(_mod15572(arg0));
    const f = _mod15573.f;
    let tmp2 = fResult;
    if (f) {
      tmp2 = closure_2(fResult, f(arg0));
    }
    return tmp2;
  };
