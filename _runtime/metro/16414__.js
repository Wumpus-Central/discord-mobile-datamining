// _runtime/metro/16414__.js
import _mod16380 from "16380__.js";
import _mod16401 from "16401__.js";
import f2 from "../16415_f.js";
import _mod16425 from "16425__.js";
import _mod16426 from "16426__.js";

let closure_2 = _mod16380([].concat);

export default _mod16401("Reflect", "ownKeys") ||
  function ownKeys(arg0) {
    const fResult = f2.f(_mod16425(arg0));
    const f = _mod16426.f;
    let tmp2 = fResult;
    if (f) {
      tmp2 = closure_2(fResult, f(arg0));
    }
    return tmp2;
  };
