// _runtime/metro/15492__.js
import _mod15458 from "15458__.js";
import _mod15479 from "15479__.js";
import f2 from "../15493_f.js";
import _mod15503 from "15503__.js";
import _mod15504 from "15504__.js";

let closure_2 = _mod15458([].concat);

export default _mod15479("Reflect", "ownKeys") ||
  function ownKeys(arg0) {
    const fResult = f2.f(_mod15503(arg0));
    const f = _mod15504.f;
    let tmp2 = fResult;
    if (f) {
      tmp2 = closure_2(fResult, f(arg0));
    }
    return tmp2;
  };
