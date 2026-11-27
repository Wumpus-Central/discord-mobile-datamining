// _runtime/metro/15780__.js
import _mod15746 from "15746__.js";
import _mod15767 from "15767__.js";
import f2 from "../15781_f.js";
import _mod15791 from "15791__.js";
import _mod15792 from "15792__.js";

let closure_2 = _mod15746([].concat);

export default _mod15767("Reflect", "ownKeys") ||
  function ownKeys(arg0) {
    const fResult = f2.f(_mod15791(arg0));
    const f = _mod15792.f;
    let tmp2 = fResult;
    if (f) {
      tmp2 = closure_2(fResult, f(arg0));
    }
    return tmp2;
  };
