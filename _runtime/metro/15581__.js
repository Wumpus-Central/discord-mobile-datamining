// _runtime/metro/15581__.js
import _mod15547 from "15547__.js";
import _mod15568 from "15568__.js";
import f2 from "../15582_f.js";
import _mod15592 from "15592__.js";
import _mod15593 from "15593__.js";

let closure_2 = _mod15547([].concat);

export default _mod15568("Reflect", "ownKeys") ||
  function ownKeys(arg0) {
    const fResult = f2.f(_mod15592(arg0));
    const f = _mod15593.f;
    let tmp2 = fResult;
    if (f) {
      tmp2 = closure_2(fResult, f(arg0));
    }
    return tmp2;
  };
