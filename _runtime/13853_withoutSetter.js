// _runtime/13853_withoutSetter.js
import _mod13839 from "metro/13839__.js";
import __core_js_shared__ from "13854___core-js_shared__.js";
import sum from "13861_sum.js";
import call from "13862_call.js";
import prop from "13857_prop.js";

let closure_2 = __core_js_shared__("wks");
let _Symbol = _mod13839.Symbol;
if (prop) {
  let withoutSetter = _Symbol.for || _mod13839.Symbol;
  const tmp2 = _Symbol.for || _mod13839.Symbol;
} else {
  withoutSetter = _Symbol;
  if (_Symbol) {
    withoutSetter = _mod13839.Symbol.withoutSetter;
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
    if (!tmp(13858)) {
      let tmp5 = withoutSetter(`Symbol.${arg0}`);
      tmp2[arg0] = tmp5;
    } else {
      const tmpResult = tmp(13862);
    }
    _Symbol = tmp(13839).Symbol;
    tmp5 = _Symbol[arg0];
  }
};