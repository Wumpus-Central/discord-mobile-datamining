// === Module 15513: withoutSetter ===

// Module 15513 (withoutSetter)
import _mod15499 from "module_15499" /* 15499 */;
import _mod15514 from "module_15514" /* 15514 */;
import _mod15518 from "module_15518" /* 15518 */;
import _mod15521 from "module_15521" /* 15521 */;
import _mod15522 from "module_15522" /* 15522 */;
import prop from "module_15517" /* 15517 */;

let closure_2 = _mod15514("wks");
let _Symbol = _mod15499.Symbol;
if (prop) {
  let withoutSetter = _Symbol.for || _mod15499.Symbol;
  const tmp2 = _Symbol.for || _mod15499.Symbol;
} else {
  withoutSetter = _Symbol;
  if (_Symbol) {
    withoutSetter = _mod15499.Symbol.withoutSetter;
  }
  if (!withoutSetter) {
    withoutSetter = _mod15521;
  }
}

export default (arg0) => {
  let _Symbol = dependencyMap;
  if (_mod15522(closure_2, arg0)) {
    return closure_2[arg0];
  } else {
    if (!_mod15518) {
      let tmp5 = withoutSetter(`Symbol.${arg0}`);
      closure_2[arg0] = tmp5;
    } else {
      _mod15522;
    }
    _Symbol = _mod15499.Symbol;
    tmp5 = _Symbol[arg0];
  }
};