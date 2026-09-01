// _runtime/13966_withoutSetter.js
import _mod13952 from "metro/13952__.js";
import __core_js_shared__ from "13967___core-js_shared__.js";
import sum from "13974_sum.js";
import call from "13975_call.js";
import prop from "13970_prop.js";

let closure_2 = __core_js_shared__("wks");
let _Symbol = _mod13952.Symbol;
if (prop) {
  let withoutSetter = _Symbol.for || _mod13952.Symbol;
  const tmp2 = _Symbol.for || _mod13952.Symbol;
} else {
  withoutSetter = _Symbol;
  if (_Symbol) {
    withoutSetter = _mod13952.Symbol.withoutSetter;
  }
  if (!withoutSetter) {
    withoutSetter = sum;
  }
}

export default (arg0) => {
  let _Symbol = dependencyMap;
  if (call(closure_2, arg0)) {
    return tmp2[arg0];
  } else {
    if (!tmp(13971)) {
      let tmp5 = withoutSetter(`Symbol.${arg0}`);
      tmp2[arg0] = tmp5;
    } else {
      const tmpResult = tmp(13975);
    }
    _Symbol = tmp(13952).Symbol;
    tmp5 = _Symbol[arg0];
  }
};
