// === Module 15695: withoutSetter ===

// Module 15695 (withoutSetter)
import _mod15681 from "module_15681" /* 15681 */;
import _mod15696 from "module_15696" /* 15696 */;
import _mod15700 from "module_15700" /* 15700 */;
import sum from "sum" /* 15703 */;
import _mod15704 from "module_15704" /* 15704 */;
import prop from "module_15699" /* 15699 */;

let closure_2 = _mod15696("wks");
let _Symbol = _mod15681.Symbol;
if (prop) {
  let withoutSetter = _Symbol.for || _mod15681.Symbol;
  const tmp2 = _Symbol.for || _mod15681.Symbol;
} else {
  withoutSetter = _Symbol;
  if (_Symbol) {
    withoutSetter = _mod15681.Symbol.withoutSetter;
  }
  if (!withoutSetter) {
    withoutSetter = sum;
  }
}

export default (arg0) => {
  let _Symbol = dependencyMap;
  if (_mod15704(closure_2, arg0)) {
    return closure_2[arg0];
  } else {
    if (!_mod15700) {
      let tmp5 = withoutSetter(`Symbol.${arg0}`);
      closure_2[arg0] = tmp5;
    } else {
      _mod15704;
    }
    _Symbol = _mod15681.Symbol;
    tmp5 = _Symbol[arg0];
  }
};