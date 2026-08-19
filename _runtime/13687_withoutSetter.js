// === Module 13687: withoutSetter ===

// Module 13687 (withoutSetter)
import _mod13673 from "module_13673" /* 13673 */;
import __core_js_shared__ from "__core-js_shared__" /* 13688 */;
import sum from "sum" /* 13695 */;
import call from "call" /* 13696 */;
import prop from "prop" /* 13691 */;

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