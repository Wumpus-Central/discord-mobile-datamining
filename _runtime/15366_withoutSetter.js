// === Module 15366: withoutSetter ===

// Module 15366 (withoutSetter)
import _mod15352 from "module_15352" /* 15352 */;
import _mod15367 from "module_15367" /* 15367 */;
import _mod15371 from "module_15371" /* 15371 */;
import _mod15374 from "module_15374" /* 15374 */;
import _mod15375 from "module_15375" /* 15375 */;
import prop from "module_15370" /* 15370 */;

let closure_2 = _mod15367("wks");
let _Symbol = _mod15352.Symbol;
if (prop) {
  let withoutSetter = _Symbol.for || _mod15352.Symbol;
  const tmp2 = _Symbol.for || _mod15352.Symbol;
} else {
  withoutSetter = _Symbol;
  if (_Symbol) {
    withoutSetter = _mod15352.Symbol.withoutSetter;
  }
  if (!withoutSetter) {
    withoutSetter = _mod15374;
  }
}

export default (arg0) => {
  let _Symbol = dependencyMap;
  if (_mod15375(closure_2, arg0)) {
    return closure_2[arg0];
  } else {
    if (!_mod15371) {
      let tmp5 = withoutSetter(`Symbol.${arg0}`);
      closure_2[arg0] = tmp5;
    } else {
      _mod15375;
    }
    _Symbol = _mod15352.Symbol;
    tmp5 = _Symbol[arg0];
  }
};