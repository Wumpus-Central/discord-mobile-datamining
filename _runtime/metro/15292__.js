// _runtime/metro/15292__.js
import _mod15258 from "15258__.js";
import _mod15279 from "15279__.js";
import f2 from "../15293_f.js";
import _mod15303 from "15303__.js";
import _mod15304 from "15304__.js";

let closure_2 = _mod15258([].concat);

export default _mod15279("Reflect", "ownKeys") ||
  function ownKeys(arg0) {
    const fResult = f2.f(_mod15303(arg0));
    const f = _mod15304.f;
    let tmp2 = fResult;
    if (f) {
      tmp2 = closure_2(fResult, f(arg0));
    }
    return tmp2;
  };
