// _runtime/metro/14515__.js
import _mod14481 from "14481__.js";
import _mod14502 from "14502__.js";
import f2 from "../14516_f.js";
import _mod14526 from "14526__.js";
import _mod14527 from "14527__.js";

let closure_2 = _mod14481([].concat);

export default _mod14502("Reflect", "ownKeys") ||
  function ownKeys(arg0) {
    const fResult = f2.f(_mod14526(arg0));
    const f = _mod14527.f;
    let tmp2 = fResult;
    if (f) {
      tmp2 = closure_2(fResult, f(arg0));
    }
    return tmp2;
  };
