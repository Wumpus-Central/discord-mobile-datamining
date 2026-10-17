// _runtime/metro/15361__.js
import _mod15327 from "15327__.js";
import _mod15348 from "15348__.js";
import f2 from "../15362_f.js";
import _mod15372 from "15372__.js";
import _mod15373 from "15373__.js";

let closure_2 = _mod15327([].concat);

export default _mod15348("Reflect", "ownKeys") ||
  function ownKeys(arg0) {
    const fResult = f2.f(_mod15372(arg0));
    const f = _mod15373.f;
    let tmp2 = fResult;
    if (f) {
      tmp2 = closure_2(fResult, f(arg0));
    }
    return tmp2;
  };
