// _runtime/metro/15506__.js
import _mod15472 from "15472__.js";
import _mod15493 from "15493__.js";
import f2 from "../15507_f.js";
import _mod15517 from "15517__.js";
import _mod15518 from "15518__.js";

let closure_2 = _mod15472([].concat);

export default _mod15493("Reflect", "ownKeys") ||
  function ownKeys(arg0) {
    const fResult = f2.f(_mod15517(arg0));
    const f = _mod15518.f;
    let tmp2 = fResult;
    if (f) {
      tmp2 = closure_2(fResult, f(arg0));
    }
    return tmp2;
  };
