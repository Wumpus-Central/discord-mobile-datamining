// _runtime/metro/14366__.js
import _mod14332 from "14332__.js";
import _mod14353 from "14353__.js";
import f2 from "../14367_f.js";
import _mod14377 from "14377__.js";
import _mod14378 from "14378__.js";

let closure_2 = _mod14332([].concat);

export default _mod14353("Reflect", "ownKeys") ||
  function ownKeys(arg0) {
    const fResult = f2.f(_mod14377(arg0));
    const f = _mod14378.f;
    let tmp2 = fResult;
    if (f) {
      tmp2 = closure_2(fResult, f(arg0));
    }
    return tmp2;
  };
