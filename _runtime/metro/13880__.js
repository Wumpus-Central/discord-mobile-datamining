// _runtime/metro/13880__.js
import call from "../13846_call.js";
import all from "../13867_all.js";
import f2 from "../13881_f.js";
import all2 from "../13891_all.js";
import _mod13892 from "13892__.js";

let closure_2 = call([].concat);

export default all("Reflect", "ownKeys") || (function ownKeys(arg0) {
  const fResult = f2.f(all2(arg0));
  const f = _mod13892.f;
  let tmp2 = fResult;
  if (f) {
    tmp2 = callback(fResult, f(arg0));
  }
  return tmp2;
});