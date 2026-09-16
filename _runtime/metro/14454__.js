// _runtime/metro/14454__.js
import _mod14420 from "14420__.js";
import _mod14441 from "14441__.js";
import f2 from "../14455_f.js";
import _mod14465 from "14465__.js";
import _mod14466 from "14466__.js";

let closure_2 = _mod14420([].concat);

export default _mod14441("Reflect", "ownKeys") ||
  function ownKeys(arg0) {
    const fResult = f2.f(_mod14465(arg0));
    const f = _mod14466.f;
    let tmp2 = fResult;
    if (f) {
      tmp2 = closure_2(fResult, f(arg0));
    }
    return tmp2;
  };
