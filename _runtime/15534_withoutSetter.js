// === Module 15534: withoutSetter ===

// Module 15534 (withoutSetter)
import _mod15520 from "module_15520" /* 15520 */;
import _mod15535 from "module_15535" /* 15535 */;
import _mod15539 from "module_15539" /* 15539 */;
import _mod15542 from "module_15542" /* 15542 */;
import _mod15543 from "module_15543" /* 15543 */;
import prop from "module_15538" /* 15538 */;

let closure_2 = _mod15535("wks");
let _Symbol = _mod15520.Symbol;
if (prop) {
  let withoutSetter = _Symbol.for || _mod15520.Symbol;
  const tmp2 = _Symbol.for || _mod15520.Symbol;
} else {
  withoutSetter = _Symbol;
  if (_Symbol) {
    withoutSetter = _mod15520.Symbol.withoutSetter;
  }
  if (!withoutSetter) {
    withoutSetter = _mod15542;
  }
}

export default (arg0) => {
  let _Symbol = dependencyMap;
  if (_mod15543(closure_2, arg0)) {
    return closure_2[arg0];
  } else {
    if (!_mod15539) {
      let tmp5 = withoutSetter(`Symbol.${arg0}`);
      closure_2[arg0] = tmp5;
    } else {
      _mod15543;
    }
    _Symbol = _mod15520.Symbol;
    tmp5 = _Symbol[arg0];
  }
};