// _runtime/metro/15365__.js
import _mod15331 from "15331__.js";
import _mod15352 from "15352__.js";
import f2 from "../15366_f.js";
import _mod15376 from "15376__.js";
import _mod15377 from "15377__.js";

let closure_2 = _mod15331([].concat);

export default _mod15352("Reflect", "ownKeys") ||
  function ownKeys(arg0) {
    const fResult = f2.f(_mod15376(arg0));
    const f = _mod15377.f;
    let tmp2 = fResult;
    if (f) {
      tmp2 = closure_2(fResult, f(arg0));
    }
    return tmp2;
  };
