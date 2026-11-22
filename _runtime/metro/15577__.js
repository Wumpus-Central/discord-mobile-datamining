// _runtime/metro/15577__.js
import _mod15543 from "15543__.js";
import _mod15564 from "15564__.js";
import f2 from "../15578_f.js";
import _mod15588 from "15588__.js";
import _mod15589 from "15589__.js";

let closure_2 = _mod15543([].concat);

export default _mod15564("Reflect", "ownKeys") ||
  function ownKeys(arg0) {
    const fResult = f2.f(_mod15588(arg0));
    const f = _mod15589.f;
    let tmp2 = fResult;
    if (f) {
      tmp2 = closure_2(fResult, f(arg0));
    }
    return tmp2;
  };
