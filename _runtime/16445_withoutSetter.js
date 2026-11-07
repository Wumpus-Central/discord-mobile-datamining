// === Module 16445: withoutSetter ===

// Module 16445 (withoutSetter)
import _mod16431 from "module_16431" /* 16431 */;
import _mod16446 from "module_16446" /* 16446 */;
import _mod16450 from "module_16450" /* 16450 */;
import _mod16453 from "module_16453" /* 16453 */;
import _mod16454 from "module_16454" /* 16454 */;
import prop from "module_16449" /* 16449 */;

let closure_2 = _mod16446("wks");
let _Symbol = _mod16431.Symbol;
if (prop) {
  let withoutSetter = _Symbol.for || _mod16431.Symbol;
  const tmp2 = _Symbol.for || _mod16431.Symbol;
} else {
  withoutSetter = _Symbol;
  if (_Symbol) {
    withoutSetter = _mod16431.Symbol.withoutSetter;
  }
  if (!withoutSetter) {
    withoutSetter = _mod16453;
  }
}

export default (arg0) => {
  let _Symbol = dependencyMap;
  if (_mod16454(closure_2, arg0)) {
    return closure_2[arg0];
  } else {
    if (!_mod16450) {
      let tmp5 = withoutSetter(`Symbol.${arg0}`);
      closure_2[arg0] = tmp5;
    } else {
      _mod16454;
    }
    _Symbol = _mod16431.Symbol;
    tmp5 = _Symbol[arg0];
  }
};