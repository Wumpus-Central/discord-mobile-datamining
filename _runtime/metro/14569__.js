// _runtime/metro/14569__.js
import _mod14535 from "14535__.js";
import _mod14556 from "14556__.js";
import f2 from "../14570_f.js";
import _mod14580 from "14580__.js";
import _mod14581 from "14581__.js";

let closure_2 = _mod14535([].concat);

export default _mod14556("Reflect", "ownKeys") ||
  function ownKeys(arg0) {
    const fResult = f2.f(_mod14580(arg0));
    const f = _mod14581.f;
    let tmp2 = fResult;
    if (f) {
      tmp2 = closure_2(fResult, f(arg0));
    }
    return tmp2;
  };
