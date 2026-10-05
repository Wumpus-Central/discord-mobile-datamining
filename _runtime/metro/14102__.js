// _runtime/metro/14102__.js
import _mod14068 from "14068__.js";
import _mod14089 from "14089__.js";
import f2 from "../14103_f.js";
import _mod14113 from "14113__.js";
import _mod14114 from "14114__.js";

let closure_2 = _mod14068([].concat);

export default _mod14089("Reflect", "ownKeys") ||
  function ownKeys(arg0) {
    const fResult = f2.f(_mod14113(arg0));
    const f = _mod14114.f;
    let tmp2 = fResult;
    if (f) {
      tmp2 = closure_2(fResult, f(arg0));
    }
    return tmp2;
  };
