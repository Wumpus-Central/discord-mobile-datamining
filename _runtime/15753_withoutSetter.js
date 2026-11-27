// === Module 15753: withoutSetter ===

// Module 15753 (withoutSetter)
import _mod15739 from "module_15739" /* 15739 */;
import _mod15754 from "module_15754" /* 15754 */;
import _mod15758 from "module_15758" /* 15758 */;
import sum from "sum" /* 15761 */;
import _mod15762 from "module_15762" /* 15762 */;
import prop from "module_15757" /* 15757 */;

let closure_2 = _mod15754("wks");
let _Symbol = _mod15739.Symbol;
if (prop) {
  let withoutSetter = _Symbol.for || _mod15739.Symbol;
  const tmp2 = _Symbol.for || _mod15739.Symbol;
} else {
  withoutSetter = _Symbol;
  if (_Symbol) {
    withoutSetter = _mod15739.Symbol.withoutSetter;
  }
  if (!withoutSetter) {
    withoutSetter = sum;
  }
}

export default (arg0) => {
  let _Symbol = dependencyMap;
  if (_mod15762(closure_2, arg0)) {
    return closure_2[arg0];
  } else {
    if (!_mod15758) {
      let tmp5 = withoutSetter(`Symbol.${arg0}`);
      closure_2[arg0] = tmp5;
    } else {
      _mod15762;
    }
    _Symbol = _mod15739.Symbol;
    tmp5 = _Symbol[arg0];
  }
};