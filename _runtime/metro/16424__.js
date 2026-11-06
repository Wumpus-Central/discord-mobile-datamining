// _runtime/metro/16424__.js
import _mod16390 from "16390__.js";
import _mod16411 from "16411__.js";
import f2 from "../16425_f.js";
import _mod16435 from "16435__.js";
import _mod16436 from "16436__.js";

let closure_2 = _mod16390([].concat);

export default _mod16411("Reflect", "ownKeys") ||
  function ownKeys(arg0) {
    const fResult = f2.f(_mod16435(arg0));
    const f = _mod16436.f;
    let tmp2 = fResult;
    if (f) {
      tmp2 = closure_2(fResult, f(arg0));
    }
    return tmp2;
  };
