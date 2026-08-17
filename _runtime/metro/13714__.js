// _runtime/metro/13714__.js
import call from "../13680_call.js";
import all from "../13701_all.js";
import f2 from "../13715_f.js";
import all2 from "../13725_all.js";
import _mod13726 from "13726__.js";

let closure_2 = call([].concat);

export default all("Reflect", "ownKeys") || (function ownKeys(arg0) {
  const fResult = f2.f(all2(arg0));
  const f = _mod13726.f;
  let tmp2 = fResult;
  if (f) {
    tmp2 = callback(fResult, f(arg0));
  }
  return tmp2;
});