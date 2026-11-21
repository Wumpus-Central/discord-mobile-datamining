// _runtime/metro/15579__.js
import _mod15545 from "15545__.js";
import _mod15566 from "15566__.js";
import f2 from "../15580_f.js";
import _mod15590 from "15590__.js";
import _mod15591 from "15591__.js";

let closure_2 = _mod15545([].concat);

export default _mod15566("Reflect", "ownKeys") ||
  function ownKeys(arg0) {
    const fResult = f2.f(_mod15590(arg0));
    const f = _mod15591.f;
    let tmp2 = fResult;
    if (f) {
      tmp2 = closure_2(fResult, f(arg0));
    }
    return tmp2;
  };
