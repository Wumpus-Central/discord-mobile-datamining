// === Module 14597: withoutSetter ===

// Module 14597 (withoutSetter)
import _mod14583 from "module_14583" /* 14583 */;
import _mod14598 from "module_14598" /* 14598 */;
import _mod14602 from "module_14602" /* 14602 */;
import _mod14605 from "module_14605" /* 14605 */;
import _mod14606 from "module_14606" /* 14606 */;
import prop from "module_14601" /* 14601 */;

let closure_2 = _mod14598("wks");
let _Symbol = _mod14583.Symbol;
if (prop) {
  let withoutSetter = _Symbol.for || _mod14583.Symbol;
  const tmp2 = _Symbol.for || _mod14583.Symbol;
} else {
  withoutSetter = _Symbol;
  if (_Symbol) {
    withoutSetter = _mod14583.Symbol.withoutSetter;
  }
  if (!withoutSetter) {
    withoutSetter = _mod14605;
  }
}

export default (arg0) => {
  let _Symbol = dependencyMap;
  if (_mod14606(closure_2, arg0)) {
    return closure_2[arg0];
  } else {
    if (!_mod14602) {
      let tmp5 = withoutSetter(`Symbol.${arg0}`);
      closure_2[arg0] = tmp5;
    } else {
      _mod14606;
    }
    _Symbol = _mod14583.Symbol;
    tmp5 = _Symbol[arg0];
  }
};