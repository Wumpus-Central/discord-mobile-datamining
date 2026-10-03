// _runtime/metro/14100__.js
import _mod14066 from "14066__.js";
import _mod14087 from "14087__.js";
import f2 from "../14101_f.js";
import _mod14111 from "14111__.js";
import _mod14112 from "14112__.js";

let closure_2 = _mod14066([].concat);

export default _mod14087("Reflect", "ownKeys") ||
  function ownKeys(arg0) {
    const fResult = f2.f(_mod14111(arg0));
    const f = _mod14112.f;
    let tmp2 = fResult;
    if (f) {
      tmp2 = closure_2(fResult, f(arg0));
    }
    return tmp2;
  };
