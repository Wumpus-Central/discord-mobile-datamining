// === Module 16397: withoutSetter ===

// Module 16397 (withoutSetter)
import _mod16383 from "module_16383" /* 16383 */;
import _mod16398 from "module_16398" /* 16398 */;
import _mod16402 from "module_16402" /* 16402 */;
import _mod16405 from "module_16405" /* 16405 */;
import _mod16406 from "module_16406" /* 16406 */;
import prop from "module_16401" /* 16401 */;

let closure_2 = _mod16398("wks");
let _Symbol = _mod16383.Symbol;
if (prop) {
  let withoutSetter = _Symbol.for || _mod16383.Symbol;
  const tmp2 = _Symbol.for || _mod16383.Symbol;
} else {
  withoutSetter = _Symbol;
  if (_Symbol) {
    withoutSetter = _mod16383.Symbol.withoutSetter;
  }
  if (!withoutSetter) {
    withoutSetter = _mod16405;
  }
}

export default (arg0) => {
  let _Symbol = dependencyMap;
  if (_mod16406(closure_2, arg0)) {
    return closure_2[arg0];
  } else {
    if (!_mod16402) {
      let tmp5 = withoutSetter(`Symbol.${arg0}`);
      closure_2[arg0] = tmp5;
    } else {
      _mod16406;
    }
    _Symbol = _mod16383.Symbol;
    tmp5 = _Symbol[arg0];
  }
};