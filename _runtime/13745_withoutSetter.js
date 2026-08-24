// === Module 13745: withoutSetter ===

// Module 13745 (withoutSetter)
import _mod13731 from "module_13731" /* 13731 */;
import __core_js_shared__ from "__core-js_shared__" /* 13746 */;
import sum from "sum" /* 13753 */;
import call from "call" /* 13754 */;
import prop from "prop" /* 13749 */;

let closure_2 = __core_js_shared__("wks");
let _Symbol = _mod13731.Symbol;
if (prop) {
  let withoutSetter = _Symbol.for || _mod13731.Symbol;
  const tmp2 = _Symbol.for || _mod13731.Symbol;
} else {
  withoutSetter = _Symbol;
  if (_Symbol) {
    withoutSetter = _mod13731.Symbol.withoutSetter;
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
    if (!tmp(13750)) {
      let tmp5 = withoutSetter(`Symbol.${arg0}`);
      tmp2[arg0] = tmp5;
    } else {
      const tmpResult = tmp(13754);
    }
    _Symbol = tmp(13731).Symbol;
    tmp5 = _Symbol[arg0];
  }
};