// _runtime/metro/14618__.js
import _mod14584 from "14584__.js";
import _mod14605 from "14605__.js";
import f2 from "../14619_f.js";
import _mod14629 from "14629__.js";
import _mod14630 from "14630__.js";

let closure_2 = _mod14584([].concat);

export default _mod14605("Reflect", "ownKeys") ||
  function ownKeys(arg0) {
    const fResult = f2.f(_mod14629(arg0));
    const f = _mod14630.f;
    let tmp2 = fResult;
    if (f) {
      tmp2 = closure_2(fResult, f(arg0));
    }
    return tmp2;
  };
