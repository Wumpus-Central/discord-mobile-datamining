// _runtime/metro/14704__.js
import _mod14670 from "14670__.js";
import _mod14691 from "14691__.js";
import f2 from "../14705_f.js";
import _mod14715 from "14715__.js";
import _mod14716 from "14716__.js";

let closure_2 = _mod14670([].concat);

export default _mod14691("Reflect", "ownKeys") ||
  function ownKeys(arg0) {
    const fResult = f2.f(_mod14715(arg0));
    const f = _mod14716.f;
    let tmp2 = fResult;
    if (f) {
      tmp2 = closure_2(fResult, f(arg0));
    }
    return tmp2;
  };
