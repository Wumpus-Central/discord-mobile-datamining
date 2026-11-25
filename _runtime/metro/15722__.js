// _runtime/metro/15722__.js
import _mod15688 from "15688__.js";
import _mod15709 from "15709__.js";
import f2 from "../15723_f.js";
import _mod15733 from "15733__.js";
import _mod15734 from "15734__.js";

let closure_2 = _mod15688([].concat);

export default _mod15709("Reflect", "ownKeys") ||
  function ownKeys(arg0) {
    const fResult = f2.f(_mod15733(arg0));
    const f = _mod15734.f;
    let tmp2 = fResult;
    if (f) {
      tmp2 = closure_2(fResult, f(arg0));
    }
    return tmp2;
  };
