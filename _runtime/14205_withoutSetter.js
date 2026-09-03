// _runtime/14205_withoutSetter.js
import _mod14191 from "metro/14191__.js";
import __core_js_shared__ from "14206___core-js_shared__.js";
import sum from "14213_sum.js";
import call from "14214_call.js";
import prop from "14209_prop.js";

let closure_2 = __core_js_shared__("wks");
let _Symbol = _mod14191.Symbol;
if (prop) {
  let withoutSetter = _Symbol.for || _mod14191.Symbol;
  const tmp2 = _Symbol.for || _mod14191.Symbol;
} else {
  withoutSetter = _Symbol;
  if (_Symbol) {
    withoutSetter = _mod14191.Symbol.withoutSetter;
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
    if (!tmp(14210)) {
      let tmp5 = withoutSetter(`Symbol.${arg0}`);
      tmp2[arg0] = tmp5;
    } else {
      const tmpResult = tmp(14214);
    }
    _Symbol = tmp(14191).Symbol;
    tmp5 = _Symbol[arg0];
  }
};
