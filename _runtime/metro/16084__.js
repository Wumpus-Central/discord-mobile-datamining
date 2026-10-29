// _runtime/metro/16084__.js
import _mod16050 from "16050__.js";
import _mod16071 from "16071__.js";
import f2 from "../16085_f.js";
import _mod16095 from "16095__.js";
import _mod16096 from "16096__.js";

let closure_2 = _mod16050([].concat);

export default _mod16071("Reflect", "ownKeys") ||
  function ownKeys(arg0) {
    const fResult = f2.f(_mod16095(arg0));
    const f = _mod16096.f;
    let tmp2 = fResult;
    if (f) {
      tmp2 = closure_2(fResult, f(arg0));
    }
    return tmp2;
  };
