// === Module 15479: withoutSetter ===

// Module 15479 (withoutSetter)
import _mod15465 from "module_15465" /* 15465 */;
import _mod15480 from "module_15480" /* 15480 */;
import _mod15484 from "module_15484" /* 15484 */;
import sum from "sum" /* 15487 */;
import _mod15488 from "module_15488" /* 15488 */;
import prop from "module_15483" /* 15483 */;

let closure_2 = _mod15480("wks");
let _Symbol = _mod15465.Symbol;
if (prop) {
  let withoutSetter = _Symbol.for || _mod15465.Symbol;
  const tmp2 = _Symbol.for || _mod15465.Symbol;
} else {
  withoutSetter = _Symbol;
  if (_Symbol) {
    withoutSetter = _mod15465.Symbol.withoutSetter;
  }
  if (!withoutSetter) {
    withoutSetter = sum;
  }
}

export default (arg0) => {
  let _Symbol = dependencyMap;
  if (_mod15488(closure_2, arg0)) {
    return closure_2[arg0];
  } else {
    if (!_mod15484) {
      let tmp5 = withoutSetter(`Symbol.${arg0}`);
      closure_2[arg0] = tmp5;
    } else {
      _mod15488;
    }
    _Symbol = _mod15465.Symbol;
    tmp5 = _Symbol[arg0];
  }
};