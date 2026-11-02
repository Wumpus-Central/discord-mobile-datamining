// === Module 16142: withoutSetter ===

// Module 16142 (withoutSetter)
import _mod16128 from "module_16128" /* 16128 */;
import _mod16143 from "module_16143" /* 16143 */;
import _mod16147 from "module_16147" /* 16147 */;
import _mod16150 from "module_16150" /* 16150 */;
import _mod16151 from "module_16151" /* 16151 */;
import prop from "module_16146" /* 16146 */;

let closure_2 = _mod16143("wks");
let _Symbol = _mod16128.Symbol;
if (prop) {
  let withoutSetter = _Symbol.for || _mod16128.Symbol;
  const tmp2 = _Symbol.for || _mod16128.Symbol;
} else {
  withoutSetter = _Symbol;
  if (_Symbol) {
    withoutSetter = _mod16128.Symbol.withoutSetter;
  }
  if (!withoutSetter) {
    withoutSetter = _mod16150;
  }
}

export default (arg0) => {
  let _Symbol = dependencyMap;
  if (_mod16151(closure_2, arg0)) {
    return closure_2[arg0];
  } else {
    if (!_mod16147) {
      let tmp5 = withoutSetter(`Symbol.${arg0}`);
      closure_2[arg0] = tmp5;
    } else {
      _mod16151;
    }
    _Symbol = _mod16128.Symbol;
    tmp5 = _Symbol[arg0];
  }
};