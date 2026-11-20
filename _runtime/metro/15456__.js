// _runtime/metro/15456__.js
import _mod15422 from "15422__.js";
import _mod15443 from "15443__.js";
import f2 from "../15457_f.js";
import _mod15467 from "15467__.js";
import _mod15468 from "15468__.js";

let closure_2 = _mod15422([].concat);

export default _mod15443("Reflect", "ownKeys") ||
  function ownKeys(arg0) {
    const fResult = f2.f(_mod15467(arg0));
    const f = _mod15468.f;
    let tmp2 = fResult;
    if (f) {
      tmp2 = closure_2(fResult, f(arg0));
    }
    return tmp2;
  };
