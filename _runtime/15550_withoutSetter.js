// === Module 15550: withoutSetter ===

// Module 15550 (withoutSetter)
import _mod15536 from "module_15536" /* 15536 */;
import _mod15551 from "module_15551" /* 15551 */;
import _mod15555 from "module_15555" /* 15555 */;
import sum from "sum" /* 15558 */;
import _mod15559 from "module_15559" /* 15559 */;
import prop from "module_15554" /* 15554 */;

let closure_2 = _mod15551("wks");
let _Symbol = _mod15536.Symbol;
if (prop) {
  let withoutSetter = _Symbol.for || _mod15536.Symbol;
  const tmp2 = _Symbol.for || _mod15536.Symbol;
} else {
  withoutSetter = _Symbol;
  if (_Symbol) {
    withoutSetter = _mod15536.Symbol.withoutSetter;
  }
  if (!withoutSetter) {
    withoutSetter = sum;
  }
}

export default (arg0) => {
  let _Symbol = dependencyMap;
  if (_mod15559(closure_2, arg0)) {
    return closure_2[arg0];
  } else {
    if (!_mod15555) {
      let tmp5 = withoutSetter(`Symbol.${arg0}`);
      closure_2[arg0] = tmp5;
    } else {
      _mod15559;
    }
    _Symbol = _mod15536.Symbol;
    tmp5 = _Symbol[arg0];
  }
};