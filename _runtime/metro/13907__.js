// _runtime/metro/13907__.js
import call from "../13873_call.js";
import all from "../13894_all.js";
import f2 from "../13908_f.js";
import all2 from "../13918_all.js";
import _mod13919 from "13919__.js";

let closure_2 = call([].concat);

export default all("Reflect", "ownKeys") || (function ownKeys(arg0) {
  const fResult = f2.f(all2(arg0));
  const f = _mod13919.f;
  let tmp2 = fResult;
  if (f) {
    tmp2 = callback(fResult, f(arg0));
  }
  return tmp2;
});