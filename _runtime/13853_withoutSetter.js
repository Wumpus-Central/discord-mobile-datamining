// === Module 13853: withoutSetter ===

// Module 13853 (withoutSetter)
import _mod13839 from "module_13839" /* 13839 */;
import __core_js_shared__ from "__core-js_shared__" /* 13854 */;
import sum from "sum" /* 13861 */;
import call from "call" /* 13862 */;
import prop from "prop" /* 13857 */;

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