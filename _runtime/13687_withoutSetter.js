// _runtime/13687_withoutSetter.js
import _mod13673 from "metro/13673__.js";
import __core_js_shared__ from "13688___core-js_shared__.js";
import sum from "13695_sum.js";
import call from "13696_call.js";
import prop from "13691_prop.js";

let closure_2 = __core_js_shared__("wks");
let _Symbol = _mod13673.Symbol;
if (prop) {
  let withoutSetter = _Symbol.for || _mod13673.Symbol;
  const tmp2 = _Symbol.for || _mod13673.Symbol;
} else {
  withoutSetter = _Symbol;
  if (_Symbol) {
    withoutSetter = _mod13673.Symbol.withoutSetter;
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
    if (!tmp(13692)) {
      let tmp5 = withoutSetter(`Symbol.${arg0}`);
      tmp2[arg0] = tmp5;
    } else {
      const tmpResult = tmp(13696);
    }
    _Symbol = tmp(13673).Symbol;
    tmp5 = _Symbol[arg0];
  }
};