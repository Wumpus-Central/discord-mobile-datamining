// _runtime/metro/16670__.js
import _mod16636 from "16636__.js";
import _mod16657 from "16657__.js";
import f2 from "../16671_f.js";
import _mod16681 from "16681__.js";
import _mod16682 from "16682__.js";

let closure_2 = _mod16636([].concat);

export default _mod16657("Reflect", "ownKeys") ||
  function ownKeys(arg0) {
    const fResult = f2.f(_mod16681(arg0));
    const f = _mod16682.f;
    let tmp2 = fResult;
    if (f) {
      tmp2 = closure_2(fResult, f(arg0));
    }
    return tmp2;
  };
