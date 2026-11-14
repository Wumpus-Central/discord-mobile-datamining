// === Module 16761: withoutSetter ===

// Module 16761 (withoutSetter)
import _mod16747 from "module_16747" /* 16747 */;
import _mod16762 from "module_16762" /* 16762 */;
import _mod16766 from "module_16766" /* 16766 */;
import _mod16769 from "module_16769" /* 16769 */;
import _mod16770 from "module_16770" /* 16770 */;
import prop from "module_16765" /* 16765 */;

let closure_2 = _mod16762("wks");
let _Symbol = _mod16747.Symbol;
if (prop) {
  let withoutSetter = _Symbol.for || _mod16747.Symbol;
  const tmp2 = _Symbol.for || _mod16747.Symbol;
} else {
  withoutSetter = _Symbol;
  if (_Symbol) {
    withoutSetter = _mod16747.Symbol.withoutSetter;
  }
  if (!withoutSetter) {
    withoutSetter = _mod16769;
  }
}

export default (arg0) => {
  let _Symbol = dependencyMap;
  if (_mod16770(closure_2, arg0)) {
    return closure_2[arg0];
  } else {
    if (!_mod16766) {
      let tmp5 = withoutSetter(`Symbol.${arg0}`);
      closure_2[arg0] = tmp5;
    } else {
      _mod16770;
    }
    _Symbol = _mod16747.Symbol;
    tmp5 = _Symbol[arg0];
  }
};