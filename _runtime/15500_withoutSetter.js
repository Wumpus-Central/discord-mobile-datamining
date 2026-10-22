// === Module 15500: withoutSetter ===

// Module 15500 (withoutSetter)
import _mod15486 from "module_15486" /* 15486 */;
import _mod15501 from "module_15501" /* 15501 */;
import _mod15505 from "module_15505" /* 15505 */;
import _mod15508 from "module_15508" /* 15508 */;
import _mod15509 from "module_15509" /* 15509 */;
import prop from "module_15504" /* 15504 */;

let closure_2 = _mod15501("wks");
let _Symbol = _mod15486.Symbol;
if (prop) {
  let withoutSetter = _Symbol.for || _mod15486.Symbol;
  const tmp2 = _Symbol.for || _mod15486.Symbol;
} else {
  withoutSetter = _Symbol;
  if (_Symbol) {
    withoutSetter = _mod15486.Symbol.withoutSetter;
  }
  if (!withoutSetter) {
    withoutSetter = _mod15508;
  }
}

export default (arg0) => {
  let _Symbol = dependencyMap;
  if (_mod15509(closure_2, arg0)) {
    return closure_2[arg0];
  } else {
    if (!_mod15505) {
      let tmp5 = withoutSetter(`Symbol.${arg0}`);
      closure_2[arg0] = tmp5;
    } else {
      _mod15509;
    }
    _Symbol = _mod15486.Symbol;
    tmp5 = _Symbol[arg0];
  }
};