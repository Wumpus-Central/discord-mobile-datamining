// === Module 15746: withoutSetter ===

// Module 15746 (withoutSetter)
import _mod15732 from "module_15732" /* 15732 */;
import _mod15747 from "module_15747" /* 15747 */;
import _mod15751 from "module_15751" /* 15751 */;
import sum from "sum" /* 15754 */;
import _mod15755 from "module_15755" /* 15755 */;
import prop from "module_15750" /* 15750 */;

let closure_2 = _mod15747("wks");
let _Symbol = _mod15732.Symbol;
if (prop) {
  let withoutSetter = _Symbol.for || _mod15732.Symbol;
  const tmp2 = _Symbol.for || _mod15732.Symbol;
} else {
  withoutSetter = _Symbol;
  if (_Symbol) {
    withoutSetter = _mod15732.Symbol.withoutSetter;
  }
  if (!withoutSetter) {
    withoutSetter = sum;
  }
}

export default (arg0) => {
  let _Symbol = dependencyMap;
  if (_mod15755(closure_2, arg0)) {
    return closure_2[arg0];
  } else {
    if (!_mod15751) {
      let tmp5 = withoutSetter(`Symbol.${arg0}`);
      closure_2[arg0] = tmp5;
    } else {
      _mod15755;
    }
    _Symbol = _mod15732.Symbol;
    tmp5 = _Symbol[arg0];
  }
};