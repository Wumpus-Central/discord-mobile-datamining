// _runtime/metro/14951__.js
import _mod14917 from "14917__.js";
import _mod14938 from "14938__.js";
import f2 from "../14952_f.js";
import _mod14962 from "14962__.js";
import _mod14963 from "14963__.js";

let closure_2 = _mod14917([].concat);

export default _mod14938("Reflect", "ownKeys") ||
  function ownKeys(arg0) {
    const fResult = f2.f(_mod14962(arg0));
    const f = _mod14963.f;
    let tmp2 = fResult;
    if (f) {
      tmp2 = closure_2(fResult, f(arg0));
    }
    return tmp2;
  };
