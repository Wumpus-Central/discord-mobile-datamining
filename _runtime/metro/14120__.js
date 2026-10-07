// _runtime/metro/14120__.js
import _mod14086 from "14086__.js";
import _mod14107 from "14107__.js";
import f2 from "../14121_f.js";
import _mod14131 from "14131__.js";
import _mod14132 from "14132__.js";

let closure_2 = _mod14086([].concat);

export default _mod14107("Reflect", "ownKeys") ||
  function ownKeys(arg0) {
    const fResult = f2.f(_mod14131(arg0));
    const f = _mod14132.f;
    let tmp2 = fResult;
    if (f) {
      tmp2 = closure_2(fResult, f(arg0));
    }
    return tmp2;
  };
