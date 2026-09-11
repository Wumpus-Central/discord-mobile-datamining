// _runtime/metro/14391__.js
import _mod14357 from "14357__.js";
import _mod14378 from "14378__.js";
import f2 from "../14392_f.js";
import _mod14402 from "14402__.js";
import _mod14403 from "14403__.js";

let closure_2 = _mod14357([].concat);

export default _mod14378("Reflect", "ownKeys") ||
  function ownKeys(arg0) {
    const fResult = f2.f(_mod14402(arg0));
    const f = _mod14403.f;
    let tmp2 = fResult;
    if (f) {
      tmp2 = closure_2(fResult, f(arg0));
    }
    return tmp2;
  };
