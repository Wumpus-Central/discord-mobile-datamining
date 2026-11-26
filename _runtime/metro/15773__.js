// _runtime/metro/15773__.js
import _mod15739 from "15739__.js";
import _mod15760 from "15760__.js";
import f2 from "../15774_f.js";
import _mod15784 from "15784__.js";
import _mod15785 from "15785__.js";

let closure_2 = _mod15739([].concat);

export default _mod15760("Reflect", "ownKeys") ||
  function ownKeys(arg0) {
    const fResult = f2.f(_mod15784(arg0));
    const f = _mod15785.f;
    let tmp2 = fResult;
    if (f) {
      tmp2 = closure_2(fResult, f(arg0));
    }
    return tmp2;
  };
