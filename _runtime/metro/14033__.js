// _runtime/metro/14033__.js
import _mod13999 from "13999__.js";
import _mod14020 from "14020__.js";
import f2 from "../14034_f.js";
import _mod14044 from "14044__.js";
import _mod14045 from "14045__.js";

let closure_2 = _mod13999([].concat);

export default _mod14020("Reflect", "ownKeys") ||
  function ownKeys(arg0) {
    const fResult = f2.f(_mod14044(arg0));
    const f = _mod14045.f;
    let tmp2 = fResult;
    if (f) {
      tmp2 = closure_2(fResult, f(arg0));
    }
    return tmp2;
  };
