// _runtime/metro/13993__.js
import call from "../13959_call.js";
import all from "../13980_all.js";
import f2 from "../13994_f.js";
import all2 from "../14004_all.js";
import _mod14005 from "14005__.js";

let closure_2 = call([].concat);

export default all("Reflect", "ownKeys") || (function ownKeys(arg0) {
  const fResult = f2.f(all2(arg0));
  const f = _mod14005.f;
  let tmp2 = fResult;
  if (f) {
    tmp2 = callback(fResult, f(arg0));
  }
  return tmp2;
});