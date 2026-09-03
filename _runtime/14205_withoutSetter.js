// === Module 14205: withoutSetter ===

// Module 14205 (withoutSetter)
import _mod14191 from "module_14191" /* 14191 */;
import __core_js_shared__ from "__core-js_shared__" /* 14206 */;
import sum from "sum" /* 14213 */;
import call from "call" /* 14214 */;
import prop from "prop" /* 14209 */;

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