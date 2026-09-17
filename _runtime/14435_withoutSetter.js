// === Module 14435: withoutSetter ===

// Module 14435 (withoutSetter)
import _mod14421 from "module_14421" /* 14421 */;
import _mod14436 from "module_14436" /* 14436 */;
import _mod14440 from "module_14440" /* 14440 */;
import _mod14443 from "module_14443" /* 14443 */;
import _mod14444 from "module_14444" /* 14444 */;
import prop from "module_14439" /* 14439 */;

let closure_2 = _mod14436("wks");
let _Symbol = _mod14421.Symbol;
if (prop) {
  let withoutSetter = _Symbol.for || _mod14421.Symbol;
  const tmp2 = _Symbol.for || _mod14421.Symbol;
} else {
  withoutSetter = _Symbol;
  if (_Symbol) {
    withoutSetter = _mod14421.Symbol.withoutSetter;
  }
  if (!withoutSetter) {
    withoutSetter = _mod14443;
  }
}

export default (arg0) => {
  let _Symbol = dependencyMap;
  if (_mod14444(closure_2, arg0)) {
    return closure_2[arg0];
  } else {
    if (!_mod14440) {
      let tmp5 = withoutSetter(`Symbol.${arg0}`);
      closure_2[arg0] = tmp5;
    } else {
      _mod14444;
    }
    _Symbol = _mod14421.Symbol;
    tmp5 = _Symbol[arg0];
  }
};