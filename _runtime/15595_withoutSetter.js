// === Module 15595: withoutSetter ===

// Module 15595 (withoutSetter)
import _mod15581 from "module_15581" /* 15581 */;
import _mod15596 from "module_15596" /* 15596 */;
import _mod15600 from "module_15600" /* 15600 */;
import _mod15603 from "module_15603" /* 15603 */;
import _mod15604 from "module_15604" /* 15604 */;
import prop from "module_15599" /* 15599 */;

let closure_2 = _mod15596("wks");
let _Symbol = _mod15581.Symbol;
if (prop) {
  let withoutSetter = _Symbol.for || _mod15581.Symbol;
  const tmp2 = _Symbol.for || _mod15581.Symbol;
} else {
  withoutSetter = _Symbol;
  if (_Symbol) {
    withoutSetter = _mod15581.Symbol.withoutSetter;
  }
  if (!withoutSetter) {
    withoutSetter = _mod15603;
  }
}

export default (arg0) => {
  let _Symbol = dependencyMap;
  if (_mod15604(closure_2, arg0)) {
    return closure_2[arg0];
  } else {
    if (!_mod15600) {
      let tmp5 = withoutSetter(`Symbol.${arg0}`);
      closure_2[arg0] = tmp5;
    } else {
      _mod15604;
    }
    _Symbol = _mod15581.Symbol;
    tmp5 = _Symbol[arg0];
  }
};