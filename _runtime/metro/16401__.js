// _runtime/metro/16401__.js
import _mod16367 from "16367__.js";
import _mod16388 from "16388__.js";
import f2 from "../16402_f.js";
import _mod16412 from "16412__.js";
import _mod16413 from "16413__.js";

let closure_2 = _mod16367([].concat);

export default _mod16388("Reflect", "ownKeys") ||
  function ownKeys(arg0) {
    const fResult = f2.f(_mod16412(arg0));
    const f = _mod16413.f;
    let tmp2 = fResult;
    if (f) {
      tmp2 = closure_2(fResult, f(arg0));
    }
    return tmp2;
  };
