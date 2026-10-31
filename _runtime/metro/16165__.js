// _runtime/metro/16165__.js
import _mod16131 from "16131__.js";
import _mod16152 from "16152__.js";
import f2 from "../16166_f.js";
import _mod16176 from "16176__.js";
import _mod16177 from "16177__.js";

let closure_2 = _mod16131([].concat);

export default _mod16152("Reflect", "ownKeys") ||
  function ownKeys(arg0) {
    const fResult = f2.f(_mod16176(arg0));
    const f = _mod16177.f;
    let tmp2 = fResult;
    if (f) {
      tmp2 = closure_2(fResult, f(arg0));
    }
    return tmp2;
  };
