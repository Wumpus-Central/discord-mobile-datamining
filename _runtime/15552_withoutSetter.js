// === Module 15552: withoutSetter ===

// Module 15552 (withoutSetter)
import _mod15538 from "module_15538" /* 15538 */;
import _mod15553 from "module_15553" /* 15553 */;
import _mod15557 from "module_15557" /* 15557 */;
import sum from "sum" /* 15560 */;
import _mod15561 from "module_15561" /* 15561 */;
import prop from "module_15556" /* 15556 */;

let closure_2 = _mod15553("wks");
let _Symbol = _mod15538.Symbol;
if (prop) {
  let withoutSetter = _Symbol.for || _mod15538.Symbol;
  const tmp2 = _Symbol.for || _mod15538.Symbol;
} else {
  withoutSetter = _Symbol;
  if (_Symbol) {
    withoutSetter = _mod15538.Symbol.withoutSetter;
  }
  if (!withoutSetter) {
    withoutSetter = sum;
  }
}

export default (arg0) => {
  let _Symbol = dependencyMap;
  if (_mod15561(closure_2, arg0)) {
    return closure_2[arg0];
  } else {
    if (!_mod15557) {
      let tmp5 = withoutSetter(`Symbol.${arg0}`);
      closure_2[arg0] = tmp5;
    } else {
      _mod15561;
    }
    _Symbol = _mod15538.Symbol;
    tmp5 = _Symbol[arg0];
  }
};