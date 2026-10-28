// _runtime/metro/15848__.js
import _mod15814 from "15814__.js";
import _mod15835 from "15835__.js";
import f2 from "../15849_f.js";
import _mod15859 from "15859__.js";
import _mod15860 from "15860__.js";

let closure_2 = _mod15814([].concat);

export default _mod15835("Reflect", "ownKeys") ||
  function ownKeys(arg0) {
    const fResult = f2.f(_mod15859(arg0));
    const f = _mod15860.f;
    let tmp2 = fResult;
    if (f) {
      tmp2 = closure_2(fResult, f(arg0));
    }
    return tmp2;
  };
