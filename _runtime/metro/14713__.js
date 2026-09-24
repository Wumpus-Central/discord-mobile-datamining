// _runtime/metro/14713__.js
import _mod14679 from "14679__.js";
import _mod14700 from "14700__.js";
import f2 from "../14714_f.js";
import _mod14724 from "14724__.js";
import _mod14725 from "14725__.js";

let closure_2 = _mod14679([].concat);

export default _mod14700("Reflect", "ownKeys") ||
  function ownKeys(arg0) {
    const fResult = f2.f(_mod14724(arg0));
    const f = _mod14725.f;
    let tmp2 = fResult;
    if (f) {
      tmp2 = closure_2(fResult, f(arg0));
    }
    return tmp2;
  };
