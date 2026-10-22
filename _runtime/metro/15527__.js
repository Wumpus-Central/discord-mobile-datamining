// _runtime/metro/15527__.js
import _mod15493 from "15493__.js";
import _mod15514 from "15514__.js";
import f2 from "../15528_f.js";
import _mod15538 from "15538__.js";
import _mod15539 from "15539__.js";

let closure_2 = _mod15493([].concat);

export default _mod15514("Reflect", "ownKeys") ||
  function ownKeys(arg0) {
    const fResult = f2.f(_mod15538(arg0));
    const f = _mod15539.f;
    let tmp2 = fResult;
    if (f) {
      tmp2 = closure_2(fResult, f(arg0));
    }
    return tmp2;
  };
