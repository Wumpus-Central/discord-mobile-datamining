// === Module 15465: withoutSetter ===

// Module 15465 (withoutSetter)
import _mod15451 from "module_15451" /* 15451 */;
import _mod15466 from "module_15466" /* 15466 */;
import _mod15470 from "module_15470" /* 15470 */;
import sum from "sum" /* 15473 */;
import _mod15474 from "module_15474" /* 15474 */;
import prop from "module_15469" /* 15469 */;

let closure_2 = _mod15466("wks");
let _Symbol = _mod15451.Symbol;
if (prop) {
  let withoutSetter = _Symbol.for || _mod15451.Symbol;
  const tmp2 = _Symbol.for || _mod15451.Symbol;
} else {
  withoutSetter = _Symbol;
  if (_Symbol) {
    withoutSetter = _mod15451.Symbol.withoutSetter;
  }
  if (!withoutSetter) {
    withoutSetter = sum;
  }
}

export default (arg0) => {
  let _Symbol = dependencyMap;
  if (_mod15474(closure_2, arg0)) {
    return closure_2[arg0];
  } else {
    if (!_mod15470) {
      let tmp5 = withoutSetter(`Symbol.${arg0}`);
      closure_2[arg0] = tmp5;
    } else {
      _mod15474;
    }
    _Symbol = _mod15451.Symbol;
    tmp5 = _Symbol[arg0];
  }
};