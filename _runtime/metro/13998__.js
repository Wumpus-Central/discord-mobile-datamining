// _runtime/metro/13998__.js
import _mod13964 from "13964__.js";
import _mod13985 from "13985__.js";
import f2 from "../13999_f.js";
import _mod14009 from "14009__.js";
import _mod14010 from "14010__.js";

let closure_2 = _mod13964([].concat);

export default _mod13985("Reflect", "ownKeys") ||
  function ownKeys(arg0) {
    const fResult = f2.f(_mod14009(arg0));
    const f = _mod14010.f;
    let tmp2 = fResult;
    if (f) {
      tmp2 = closure_2(fResult, f(arg0));
    }
    return tmp2;
  };
