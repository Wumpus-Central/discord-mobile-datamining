// _runtime/14189_withoutSetter.js
import _mod14175 from "metro/14175__.js";
import __core_js_shared__ from "14190___core-js_shared__.js";
import sum from "14197_sum.js";
import call from "14198_call.js";
import prop from "14193_prop.js";

let closure_2 = __core_js_shared__("wks");
let _Symbol = _mod14175.Symbol;
if (prop) {
  let withoutSetter = _Symbol.for || _mod14175.Symbol;
  const tmp2 = _Symbol.for || _mod14175.Symbol;
} else {
  withoutSetter = _Symbol;
  if (_Symbol) {
    withoutSetter = _mod14175.Symbol.withoutSetter;
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
    if (!tmp(14194)) {
      let tmp5 = withoutSetter(`Symbol.${arg0}`);
      tmp2[arg0] = tmp5;
    } else {
      const tmpResult = tmp(14198);
    }
    _Symbol = tmp(14175).Symbol;
    tmp5 = _Symbol[arg0];
  }
};
