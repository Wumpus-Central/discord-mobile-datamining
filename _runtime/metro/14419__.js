// _runtime/metro/14419__.js
import _mod14385 from "14385__.js";
import _mod14406 from "14406__.js";
import f2 from "../14420_f.js";
import _mod14430 from "14430__.js";
import _mod14431 from "14431__.js";

let closure_2 = _mod14385([].concat);

export default _mod14406("Reflect", "ownKeys") ||
  function ownKeys(arg0) {
    const fResult = f2.f(_mod14430(arg0));
    const f = _mod14431.f;
    let tmp2 = fResult;
    if (f) {
      tmp2 = closure_2(fResult, f(arg0));
    }
    return tmp2;
  };
