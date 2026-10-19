// _runtime/metro/15393__.js
import _mod15359 from "15359__.js";
import _mod15380 from "15380__.js";
import f2 from "../15394_f.js";
import _mod15404 from "15404__.js";
import _mod15405 from "15405__.js";

let closure_2 = _mod15359([].concat);

export default _mod15380("Reflect", "ownKeys") ||
  function ownKeys(arg0) {
    const fResult = f2.f(_mod15404(arg0));
    const f = _mod15405.f;
    let tmp2 = fResult;
    if (f) {
      tmp2 = closure_2(fResult, f(arg0));
    }
    return tmp2;
  };
