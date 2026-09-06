// _runtime/14311_withoutSetter.js
import _mod14297 from "metro/14297__.js";
import __core_js_shared__ from "14312___core-js_shared__.js";
import sum from "14319_sum.js";
import call from "14320_call.js";
import prop from "14315_prop.js";

let closure_2 = __core_js_shared__("wks");
let _Symbol = _mod14297.Symbol;
if (prop) {
  let withoutSetter = _Symbol.for || _mod14297.Symbol;
  const tmp2 = _Symbol.for || _mod14297.Symbol;
} else {
  withoutSetter = _Symbol;
  if (_Symbol) {
    withoutSetter = _mod14297.Symbol.withoutSetter;
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
    if (!tmp(14316)) {
      let tmp5 = withoutSetter(`Symbol.${arg0}`);
      tmp2[arg0] = tmp5;
    } else {
      const tmpResult = tmp(14320);
    }
    _Symbol = tmp(14297).Symbol;
    tmp5 = _Symbol[arg0];
  }
};
