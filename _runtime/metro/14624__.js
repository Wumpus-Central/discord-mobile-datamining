// _runtime/metro/14624__.js
import _mod14590 from "14590__.js";
import _mod14611 from "14611__.js";
import f2 from "../14625_f.js";
import _mod14635 from "14635__.js";
import _mod14636 from "14636__.js";

let closure_2 = _mod14590([].concat);

export default _mod14611("Reflect", "ownKeys") ||
  function ownKeys(arg0) {
    const fResult = f2.f(_mod14635(arg0));
    const f = _mod14636.f;
    let tmp2 = fResult;
    if (f) {
      tmp2 = closure_2(fResult, f(arg0));
    }
    return tmp2;
  };
