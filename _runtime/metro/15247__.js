// _runtime/metro/15247__.js
import _mod15213 from "15213__.js";
import _mod15234 from "15234__.js";
import f2 from "../15248_f.js";
import _mod15258 from "15258__.js";
import _mod15259 from "15259__.js";

let closure_2 = _mod15213([].concat);

export default _mod15234("Reflect", "ownKeys") ||
  function ownKeys(arg0) {
    const fResult = f2.f(_mod15258(arg0));
    const f = _mod15259.f;
    let tmp2 = fResult;
    if (f) {
      tmp2 = closure_2(fResult, f(arg0));
    }
    return tmp2;
  };
