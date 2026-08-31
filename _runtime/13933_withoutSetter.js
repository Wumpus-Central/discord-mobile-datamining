// === Module 13933: withoutSetter ===

// Module 13933 (withoutSetter)
import _mod13919 from "module_13919" /* 13919 */;
import __core_js_shared__ from "__core-js_shared__" /* 13934 */;
import sum from "sum" /* 13941 */;
import call from "call" /* 13942 */;
import prop from "prop" /* 13937 */;

let closure_2 = __core_js_shared__("wks");
let _Symbol = _mod13919.Symbol;
if (prop) {
  let withoutSetter = _Symbol.for || _mod13919.Symbol;
  const tmp2 = _Symbol.for || _mod13919.Symbol;
} else {
  withoutSetter = _Symbol;
  if (_Symbol) {
    withoutSetter = _mod13919.Symbol.withoutSetter;
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
    if (!tmp(13938)) {
      let tmp5 = withoutSetter(`Symbol.${arg0}`);
      tmp2[arg0] = tmp5;
    } else {
      const tmpResult = tmp(13942);
    }
    _Symbol = tmp(13919).Symbol;
    tmp5 = _Symbol[arg0];
  }
};