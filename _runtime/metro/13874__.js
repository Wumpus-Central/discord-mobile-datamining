// _runtime/metro/13874__.js
import _mod13840 from "13840__.js";
import _mod13861 from "13861__.js";
import f2 from "../13875_f.js";
import _mod13885 from "13885__.js";
import _mod13886 from "13886__.js";

let closure_2 = _mod13840([].concat);

export default _mod13861("Reflect", "ownKeys") ||
  function ownKeys(arg0) {
    const fResult = f2.f(_mod13885(arg0));
    const f = _mod13886.f;
    let tmp2 = fResult;
    if (f) {
      tmp2 = closure_2(fResult, f(arg0));
    }
    return tmp2;
  };
