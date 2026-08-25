// _runtime/metro/13807__.js
import call from "../13773_call.js";
import all from "../13794_all.js";
import f2 from "../13808_f.js";
import all2 from "../13818_all.js";
import _mod13819 from "13819__.js";

let closure_2 = call([].concat);

export default all("Reflect", "ownKeys") || (function ownKeys(arg0) {
  const fResult = f2.f(all2(arg0));
  const f = _mod13819.f;
  let tmp2 = fResult;
  if (f) {
    tmp2 = callback(fResult, f(arg0));
  }
  return tmp2;
});