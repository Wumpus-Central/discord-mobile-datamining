// _runtime/metro/15540__.js
import _mod15506 from "15506__.js";
import _mod15527 from "15527__.js";
import f2 from "../15541_f.js";
import _mod15551 from "15551__.js";
import _mod15552 from "15552__.js";

let closure_2 = _mod15506([].concat);

export default _mod15527("Reflect", "ownKeys") ||
  function ownKeys(arg0) {
    const fResult = f2.f(_mod15551(arg0));
    const f = _mod15552.f;
    let tmp2 = fResult;
    if (f) {
      tmp2 = closure_2(fResult, f(arg0));
    }
    return tmp2;
  };
