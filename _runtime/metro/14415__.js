// _runtime/metro/14415__.js
import _mod14381 from "14381__.js";
import _mod14402 from "14402__.js";
import f2 from "../14416_f.js";
import _mod14426 from "14426__.js";
import _mod14427 from "14427__.js";

let closure_2 = _mod14381([].concat);

export default _mod14402("Reflect", "ownKeys") ||
  function ownKeys(arg0) {
    const fResult = f2.f(_mod14426(arg0));
    const f = _mod14427.f;
    let tmp2 = fResult;
    if (f) {
      tmp2 = closure_2(fResult, f(arg0));
    }
    return tmp2;
  };
