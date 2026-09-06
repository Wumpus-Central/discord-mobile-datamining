// _runtime/metro/14338__.js
import _mod14304 from "14304__.js";
import _mod14325 from "14325__.js";
import f2 from "../14339_f.js";
import _mod14349 from "14349__.js";
import _mod14350 from "14350__.js";

let closure_2 = _mod14304([].concat);

export default _mod14325("Reflect", "ownKeys") ||
  function ownKeys(arg0) {
    const fResult = f2.f(_mod14349(arg0));
    const f = _mod14350.f;
    let tmp2 = fResult;
    if (f) {
      tmp2 = closure_2(fResult, f(arg0));
    }
    return tmp2;
  };
