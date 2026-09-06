// _runtime/metro/14338__.js
import call from "../14304_call.js";
import all from "../14325_all.js";
import f2 from "../14339_f.js";
import all2 from "../14349_all.js";
import _mod14350 from "14350__.js";

let closure_2 = call([].concat);

export default all("Reflect", "ownKeys") ||
  function ownKeys(arg0) {
    const fResult = f2.f(all2(arg0));
    const f = _mod14350.f;
    let tmp2 = fResult;
    if (f) {
      tmp2 = callback(fResult, f(arg0));
    }
    return tmp2;
  };
