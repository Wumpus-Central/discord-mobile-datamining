// _runtime/metro/13772__.js
import call from "../13738_call.js";
import all from "../13759_all.js";
import f2 from "../13773_f.js";
import all2 from "../13783_all.js";
import _mod13784 from "13784__.js";

let closure_2 = call([].concat);

export default all("Reflect", "ownKeys") || (function ownKeys(arg0) {
  const fResult = f2.f(all2(arg0));
  const f = _mod13784.f;
  let tmp2 = fResult;
  if (f) {
    tmp2 = callback(fResult, f(arg0));
  }
  return tmp2;
});