// _runtime/metro/14341__.js
import _mod14307 from "14307__.js";
import _mod14328 from "14328__.js";
import f2 from "../14342_f.js";
import _mod14352 from "14352__.js";
import _mod14353 from "14353__.js";

let closure_2 = _mod14307([].concat);

export default _mod14328("Reflect", "ownKeys") ||
  function ownKeys(arg0) {
    const fResult = f2.f(_mod14352(arg0));
    const f = _mod14353.f;
    let tmp2 = fResult;
    if (f) {
      tmp2 = closure_2(fResult, f(arg0));
    }
    return tmp2;
  };
