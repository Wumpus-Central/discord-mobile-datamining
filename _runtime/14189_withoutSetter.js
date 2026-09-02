// === Module 14189: withoutSetter ===

// Module 14189 (withoutSetter)
import _mod14175 from "module_14175" /* 14175 */;
import __core_js_shared__ from "__core-js_shared__" /* 14190 */;
import sum from "sum" /* 14197 */;
import call from "call" /* 14198 */;
import prop from "prop" /* 14193 */;

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