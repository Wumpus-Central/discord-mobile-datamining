// === Module 14093: withoutSetter ===

// Module 14093 (withoutSetter)
import _mod14079 from "module_14079" /* 14079 */;
import _mod14094 from "module_14094" /* 14094 */;
import _mod14098 from "module_14098" /* 14098 */;
import _mod14101 from "module_14101" /* 14101 */;
import _mod14102 from "module_14102" /* 14102 */;
import prop from "module_14097" /* 14097 */;

let closure_2 = _mod14094("wks");
let _Symbol = _mod14079.Symbol;
if (prop) {
  let withoutSetter = _Symbol.for || _mod14079.Symbol;
  const tmp2 = _Symbol.for || _mod14079.Symbol;
} else {
  withoutSetter = _Symbol;
  if (_Symbol) {
    withoutSetter = _mod14079.Symbol.withoutSetter;
  }
  if (!withoutSetter) {
    withoutSetter = _mod14101;
  }
}

export default (arg0) => {
  let _Symbol = dependencyMap;
  if (_mod14102(closure_2, arg0)) {
    return closure_2[arg0];
  } else {
    if (!_mod14098) {
      let tmp5 = withoutSetter(`Symbol.${arg0}`);
      closure_2[arg0] = tmp5;
    } else {
      _mod14102;
    }
    _Symbol = _mod14079.Symbol;
    tmp5 = _Symbol[arg0];
  }
};