// _runtime/metro/14426__.js
import _mod14392 from "14392__.js";
import _mod14413 from "14413__.js";
import f2 from "../14427_f.js";
import _mod14437 from "14437__.js";
import _mod14438 from "14438__.js";

let closure_2 = _mod14392([].concat);

export default _mod14413("Reflect", "ownKeys") ||
  function ownKeys(arg0) {
    const fResult = f2.f(_mod14437(arg0));
    const f = _mod14438.f;
    let tmp2 = fResult;
    if (f) {
      tmp2 = closure_2(fResult, f(arg0));
    }
    return tmp2;
  };
