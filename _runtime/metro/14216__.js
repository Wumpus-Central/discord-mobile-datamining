// _runtime/metro/14216__.js
import call from "../14182_call.js";
import all from "../14203_all.js";
import f2 from "../14217_f.js";
import all2 from "../14227_all.js";
import _mod14228 from "14228__.js";

let closure_2 = call([].concat);

export default all("Reflect", "ownKeys") ||
  function ownKeys(arg0) {
    const fResult = f2.f(all2(arg0));
    const f = _mod14228.f;
    let tmp2 = fResult;
    if (f) {
      tmp2 = callback(fResult, f(arg0));
    }
    return tmp2;
  };
