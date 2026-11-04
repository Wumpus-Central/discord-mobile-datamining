// === Module 16387: withoutSetter ===

// Module 16387 (withoutSetter)
import _mod16373 from "module_16373" /* 16373 */;
import _mod16388 from "module_16388" /* 16388 */;
import _mod16392 from "module_16392" /* 16392 */;
import _mod16395 from "module_16395" /* 16395 */;
import _mod16396 from "module_16396" /* 16396 */;
import prop from "module_16391" /* 16391 */;

let closure_2 = _mod16388("wks");
let _Symbol = _mod16373.Symbol;
if (prop) {
  let withoutSetter = _Symbol.for || _mod16373.Symbol;
  const tmp2 = _Symbol.for || _mod16373.Symbol;
} else {
  withoutSetter = _Symbol;
  if (_Symbol) {
    withoutSetter = _mod16373.Symbol.withoutSetter;
  }
  if (!withoutSetter) {
    withoutSetter = _mod16395;
  }
}

export default (arg0) => {
  let _Symbol = dependencyMap;
  if (_mod16396(closure_2, arg0)) {
    return closure_2[arg0];
  } else {
    if (!_mod16392) {
      let tmp5 = withoutSetter(`Symbol.${arg0}`);
      closure_2[arg0] = tmp5;
    } else {
      _mod16396;
    }
    _Symbol = _mod16373.Symbol;
    tmp5 = _Symbol[arg0];
  }
};