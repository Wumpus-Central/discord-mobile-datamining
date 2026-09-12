// === Module 14399: withoutSetter ===

// Module 14399 (withoutSetter)
import _mod14385 from "module_14385" /* 14385 */;
import _mod14400 from "module_14400" /* 14400 */;
import _mod14404 from "module_14404" /* 14404 */;
import _mod14407 from "module_14407" /* 14407 */;
import _mod14408 from "module_14408" /* 14408 */;
import prop from "module_14403" /* 14403 */;

let closure_2 = _mod14400("wks");
let _Symbol = _mod14385.Symbol;
if (prop) {
  let withoutSetter = _Symbol.for || _mod14385.Symbol;
  const tmp2 = _Symbol.for || _mod14385.Symbol;
} else {
  withoutSetter = _Symbol;
  if (_Symbol) {
    withoutSetter = _mod14385.Symbol.withoutSetter;
  }
  if (!withoutSetter) {
    withoutSetter = _mod14407;
  }
}

export default (arg0) => {
  let _Symbol = dependencyMap;
  if (_mod14408(closure_2, arg0)) {
    return closure_2[arg0];
  } else {
    if (!_mod14404) {
      let tmp5 = withoutSetter(`Symbol.${arg0}`);
      closure_2[arg0] = tmp5;
    } else {
      _mod14408;
    }
    _Symbol = _mod14385.Symbol;
    tmp5 = _Symbol[arg0];
  }
};