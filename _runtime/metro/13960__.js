// _runtime/metro/13960__.js
import call from "../13926_call.js";
import all from "../13947_all.js";
import f2 from "../13961_f.js";
import all2 from "../13971_all.js";
import _mod13972 from "13972__.js";

let closure_2 = call([].concat);

export default all("Reflect", "ownKeys") || (function ownKeys(arg0) {
  const fResult = f2.f(all2(arg0));
  const f = _mod13972.f;
  let tmp2 = fResult;
  if (f) {
    tmp2 = callback(fResult, f(arg0));
  }
  return tmp2;
});