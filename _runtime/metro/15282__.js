// _runtime/metro/15282__.js
import _mod15248 from "15248__.js";
import _mod15269 from "15269__.js";
import f2 from "../15283_f.js";
import _mod15293 from "15293__.js";
import _mod15294 from "15294__.js";

let closure_2 = _mod15248([].concat);

export default _mod15269("Reflect", "ownKeys") ||
  function ownKeys(arg0) {
    const fResult = f2.f(_mod15293(arg0));
    const f = _mod15294.f;
    let tmp2 = fResult;
    if (f) {
      tmp2 = closure_2(fResult, f(arg0));
    }
    return tmp2;
  };
