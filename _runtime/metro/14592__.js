// _runtime/metro/14592__.js
import _mod14558 from "14558__.js";
import _mod14579 from "14579__.js";
import f2 from "../14593_f.js";
import _mod14603 from "14603__.js";
import _mod14604 from "14604__.js";

let closure_2 = _mod14558([].concat);

export default _mod14579("Reflect", "ownKeys") ||
  function ownKeys(arg0) {
    const fResult = f2.f(_mod14603(arg0));
    const f = _mod14604.f;
    let tmp2 = fResult;
    if (f) {
      tmp2 = closure_2(fResult, f(arg0));
    }
    return tmp2;
  };
