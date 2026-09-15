// _runtime/metro/14436__.js
import _mod14402 from "14402__.js";
import _mod14423 from "14423__.js";
import f2 from "../14437_f.js";
import _mod14447 from "14447__.js";
import _mod14448 from "14448__.js";

let closure_2 = _mod14402([].concat);

export default _mod14423("Reflect", "ownKeys") ||
  function ownKeys(arg0) {
    const fResult = f2.f(_mod14447(arg0));
    const f = _mod14448.f;
    let tmp2 = fResult;
    if (f) {
      tmp2 = closure_2(fResult, f(arg0));
    }
    return tmp2;
  };
