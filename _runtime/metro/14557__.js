// _runtime/metro/14557__.js
import _mod14523 from "14523__.js";
import _mod14544 from "14544__.js";
import f2 from "../14558_f.js";
import _mod14568 from "14568__.js";
import _mod14569 from "14569__.js";

let closure_2 = _mod14523([].concat);

export default _mod14544("Reflect", "ownKeys") ||
  function ownKeys(arg0) {
    const fResult = f2.f(_mod14568(arg0));
    const f = _mod14569.f;
    let tmp2 = fResult;
    if (f) {
      tmp2 = closure_2(fResult, f(arg0));
    }
    return tmp2;
  };
