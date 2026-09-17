// _runtime/metro/14462__.js
import _mod14428 from "14428__.js";
import _mod14449 from "14449__.js";
import f2 from "../14463_f.js";
import _mod14473 from "14473__.js";
import _mod14474 from "14474__.js";

let closure_2 = _mod14428([].concat);

export default _mod14449("Reflect", "ownKeys") ||
  function ownKeys(arg0) {
    const fResult = f2.f(_mod14473(arg0));
    const f = _mod14474.f;
    let tmp2 = fResult;
    if (f) {
      tmp2 = closure_2(fResult, f(arg0));
    }
    return tmp2;
  };
