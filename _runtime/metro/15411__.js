// _runtime/metro/15411__.js
import _mod15377 from "15377__.js";
import _mod15398 from "15398__.js";
import f2 from "../15412_f.js";
import _mod15422 from "15422__.js";
import _mod15423 from "15423__.js";

let closure_2 = _mod15377([].concat);

export default _mod15398("Reflect", "ownKeys") ||
  function ownKeys(arg0) {
    const fResult = f2.f(_mod15422(arg0));
    const f = _mod15423.f;
    let tmp2 = fResult;
    if (f) {
      tmp2 = closure_2(fResult, f(arg0));
    }
    return tmp2;
  };
