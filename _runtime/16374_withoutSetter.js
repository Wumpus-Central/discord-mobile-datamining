// === Module 16374: withoutSetter ===

// Module 16374 (withoutSetter)
import _mod16360 from "module_16360" /* 16360 */;
import _mod16375 from "module_16375" /* 16375 */;
import _mod16379 from "module_16379" /* 16379 */;
import _mod16382 from "module_16382" /* 16382 */;
import _mod16383 from "module_16383" /* 16383 */;
import prop from "module_16378" /* 16378 */;

let closure_2 = _mod16375("wks");
let _Symbol = _mod16360.Symbol;
if (prop) {
  let withoutSetter = _Symbol.for || _mod16360.Symbol;
  const tmp2 = _Symbol.for || _mod16360.Symbol;
} else {
  withoutSetter = _Symbol;
  if (_Symbol) {
    withoutSetter = _mod16360.Symbol.withoutSetter;
  }
  if (!withoutSetter) {
    withoutSetter = _mod16382;
  }
}

export default (arg0) => {
  let _Symbol = dependencyMap;
  if (_mod16383(closure_2, arg0)) {
    return closure_2[arg0];
  } else {
    if (!_mod16379) {
      let tmp5 = withoutSetter(`Symbol.${arg0}`);
      closure_2[arg0] = tmp5;
    } else {
      _mod16383;
    }
    _Symbol = _mod16360.Symbol;
    tmp5 = _Symbol[arg0];
  }
};