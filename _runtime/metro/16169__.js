// _runtime/metro/16169__.js
import _mod16135 from "16135__.js";
import _mod16156 from "16156__.js";
import f2 from "../16170_f.js";
import _mod16180 from "16180__.js";
import _mod16181 from "16181__.js";

let closure_2 = _mod16135([].concat);

export default _mod16156("Reflect", "ownKeys") ||
  function ownKeys(arg0) {
    const fResult = f2.f(_mod16180(arg0));
    const f = _mod16181.f;
    let tmp2 = fResult;
    if (f) {
      tmp2 = closure_2(fResult, f(arg0));
    }
    return tmp2;
  };
