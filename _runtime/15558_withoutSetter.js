// === Module 15558: withoutSetter ===

// Module 15558 (withoutSetter)
import _mod15544 from "module_15544" /* 15544 */;
import _mod15559 from "module_15559" /* 15559 */;
import _mod15563 from "module_15563" /* 15563 */;
import _mod15566 from "module_15566" /* 15566 */;
import _mod15567 from "module_15567" /* 15567 */;
import prop from "module_15562" /* 15562 */;

let closure_2 = _mod15559("wks");
let _Symbol = _mod15544.Symbol;
if (prop) {
  let withoutSetter = _Symbol.for || _mod15544.Symbol;
  const tmp2 = _Symbol.for || _mod15544.Symbol;
} else {
  withoutSetter = _Symbol;
  if (_Symbol) {
    withoutSetter = _mod15544.Symbol.withoutSetter;
  }
  if (!withoutSetter) {
    withoutSetter = _mod15566;
  }
}

export default (arg0) => {
  let _Symbol = dependencyMap;
  if (_mod15567(closure_2, arg0)) {
    return closure_2[arg0];
  } else {
    if (!_mod15563) {
      let tmp5 = withoutSetter(`Symbol.${arg0}`);
      closure_2[arg0] = tmp5;
    } else {
      _mod15567;
    }
    _Symbol = _mod15544.Symbol;
    tmp5 = _Symbol[arg0];
  }
};