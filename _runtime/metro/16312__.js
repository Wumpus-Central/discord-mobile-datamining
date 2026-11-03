// _runtime/metro/16312__.js
import _mod16278 from "16278__.js";
import _mod16299 from "16299__.js";
import f2 from "../16313_f.js";
import _mod16323 from "16323__.js";
import _mod16324 from "16324__.js";

let closure_2 = _mod16278([].concat);

export default _mod16299("Reflect", "ownKeys") ||
  function ownKeys(arg0) {
    const fResult = f2.f(_mod16323(arg0));
    const f = _mod16324.f;
    let tmp2 = fResult;
    if (f) {
      tmp2 = closure_2(fResult, f(arg0));
    }
    return tmp2;
  };
