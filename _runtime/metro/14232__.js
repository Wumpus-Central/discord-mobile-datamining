// _runtime/metro/14232__.js
import call from "../14198_call.js";
import all from "../14219_all.js";
import f2 from "../14233_f.js";
import all2 from "../14243_all.js";
import _mod14244 from "14244__.js";

let closure_2 = call([].concat);

export default all("Reflect", "ownKeys") ||
  function ownKeys(arg0) {
    const fResult = f2.f(all2(arg0));
    const f = _mod14244.f;
    let tmp2 = fResult;
    if (f) {
      tmp2 = callback(fResult, f(arg0));
    }
    return tmp2;
  };
