// _runtime/metro/14612__.js
import _mod14578 from "14578__.js";
import _mod14599 from "14599__.js";
import f2 from "../14613_f.js";
import _mod14623 from "14623__.js";
import _mod14624 from "14624__.js";

let closure_2 = _mod14578([].concat);

export default _mod14599("Reflect", "ownKeys") ||
  function ownKeys(arg0) {
    const fResult = f2.f(_mod14623(arg0));
    const f = _mod14624.f;
    let tmp2 = fResult;
    if (f) {
      tmp2 = closure_2(fResult, f(arg0));
    }
    return tmp2;
  };
