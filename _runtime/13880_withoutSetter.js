// === Module 13880: withoutSetter ===

// Module 13880 (withoutSetter)
import _mod13866 from "module_13866" /* 13866 */;
import __core_js_shared__ from "__core-js_shared__" /* 13881 */;
import sum from "sum" /* 13888 */;
import call from "call" /* 13889 */;
import prop from "prop" /* 13884 */;

let closure_2 = __core_js_shared__("wks");
let _Symbol = _mod13866.Symbol;
if (prop) {
  let withoutSetter = _Symbol.for || _mod13866.Symbol;
  const tmp2 = _Symbol.for || _mod13866.Symbol;
} else {
  withoutSetter = _Symbol;
  if (_Symbol) {
    withoutSetter = _mod13866.Symbol.withoutSetter;
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
    if (!tmp(13885)) {
      let tmp5 = withoutSetter(`Symbol.${arg0}`);
      tmp2[arg0] = tmp5;
    } else {
      const tmpResult = tmp(13889);
    }
    _Symbol = tmp(13866).Symbol;
    tmp5 = _Symbol[arg0];
  }
};