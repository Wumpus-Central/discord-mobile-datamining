// _runtime/metro/15585__.js
import _mod15551 from "15551__.js";
import _mod15572 from "15572__.js";
import f2 from "../15586_f.js";
import _mod15596 from "15596__.js";
import _mod15597 from "15597__.js";

let closure_2 = _mod15551([].concat);

export default _mod15572("Reflect", "ownKeys") ||
  function ownKeys(arg0) {
    const fResult = f2.f(_mod15596(arg0));
    const f = _mod15597.f;
    let tmp2 = fResult;
    if (f) {
      tmp2 = closure_2(fResult, f(arg0));
    }
    return tmp2;
  };
