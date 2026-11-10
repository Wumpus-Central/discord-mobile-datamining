// === Module 16482: withoutSetter ===

// Module 16482 (withoutSetter)
import _mod16468 from "module_16468" /* 16468 */;
import _mod16483 from "module_16483" /* 16483 */;
import _mod16487 from "module_16487" /* 16487 */;
import _mod16490 from "module_16490" /* 16490 */;
import _mod16491 from "module_16491" /* 16491 */;
import prop from "module_16486" /* 16486 */;

let closure_2 = _mod16483("wks");
let _Symbol = _mod16468.Symbol;
if (prop) {
  let withoutSetter = _Symbol.for || _mod16468.Symbol;
  const tmp2 = _Symbol.for || _mod16468.Symbol;
} else {
  withoutSetter = _Symbol;
  if (_Symbol) {
    withoutSetter = _mod16468.Symbol.withoutSetter;
  }
  if (!withoutSetter) {
    withoutSetter = _mod16490;
  }
}

export default (arg0) => {
  let _Symbol = dependencyMap;
  if (_mod16491(closure_2, arg0)) {
    return closure_2[arg0];
  } else {
    if (!_mod16487) {
      let tmp5 = withoutSetter(`Symbol.${arg0}`);
      closure_2[arg0] = tmp5;
    } else {
      _mod16491;
    }
    _Symbol = _mod16468.Symbol;
    tmp5 = _Symbol[arg0];
  }
};