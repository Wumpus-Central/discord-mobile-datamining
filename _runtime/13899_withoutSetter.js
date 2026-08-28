// === Module 13899: withoutSetter ===

// Module 13899 (withoutSetter)
import _mod13885 from "module_13885" /* 13885 */;
import __core_js_shared__ from "__core-js_shared__" /* 13900 */;
import sum from "sum" /* 13907 */;
import call from "call" /* 13908 */;
import prop from "prop" /* 13903 */;

let closure_2 = __core_js_shared__("wks");
let _Symbol = _mod13885.Symbol;
if (prop) {
  let withoutSetter = _Symbol.for || _mod13885.Symbol;
  const tmp2 = _Symbol.for || _mod13885.Symbol;
} else {
  withoutSetter = _Symbol;
  if (_Symbol) {
    withoutSetter = _mod13885.Symbol.withoutSetter;
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
    if (!tmp(13904)) {
      let tmp5 = withoutSetter(`Symbol.${arg0}`);
      tmp2[arg0] = tmp5;
    } else {
      const tmpResult = tmp(13908);
    }
    _Symbol = tmp(13885).Symbol;
    tmp5 = _Symbol[arg0];
  }
};