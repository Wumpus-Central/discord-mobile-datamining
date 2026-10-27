// _runtime/metro/15622__.js
import _mod15588 from "15588__.js";
import _mod15609 from "15609__.js";
import f2 from "../15623_f.js";
import _mod15633 from "15633__.js";
import _mod15634 from "15634__.js";

let closure_2 = _mod15588([].concat);

export default _mod15609("Reflect", "ownKeys") ||
  function ownKeys(arg0) {
    const fResult = f2.f(_mod15633(arg0));
    const f = _mod15634.f;
    let tmp2 = fResult;
    if (f) {
      tmp2 = closure_2(fResult, f(arg0));
    }
    return tmp2;
  };
