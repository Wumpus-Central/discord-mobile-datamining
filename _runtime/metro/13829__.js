// _runtime/metro/13829__.js
import _mod13795 from "13795__.js";
import _mod13816 from "13816__.js";
import f2 from "../13830_f.js";
import _mod13840 from "13840__.js";
import _mod13841 from "13841__.js";

let closure_2 = _mod13795([].concat);

export default _mod13816("Reflect", "ownKeys") ||
  function ownKeys(arg0) {
    const fResult = f2.f(_mod13840(arg0));
    const f = _mod13841.f;
    let tmp2 = fResult;
    if (f) {
      tmp2 = closure_2(fResult, f(arg0));
    }
    return tmp2;
  };
