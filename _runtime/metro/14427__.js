// _runtime/metro/14427__.js
import _mod14393 from "14393__.js";
import _mod14414 from "14414__.js";
import f2 from "../14428_f.js";
import _mod14438 from "14438__.js";
import _mod14439 from "14439__.js";

let closure_2 = _mod14393([].concat);

export default _mod14414("Reflect", "ownKeys") ||
  function ownKeys(arg0) {
    const fResult = f2.f(_mod14438(arg0));
    const f = _mod14439.f;
    let tmp2 = fResult;
    if (f) {
      tmp2 = closure_2(fResult, f(arg0));
    }
    return tmp2;
  };
