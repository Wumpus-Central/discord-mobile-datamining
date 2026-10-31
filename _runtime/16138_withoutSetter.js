// === Module 16138: withoutSetter ===

// Module 16138 (withoutSetter)
import _mod16124 from "module_16124" /* 16124 */;
import _mod16139 from "module_16139" /* 16139 */;
import _mod16143 from "module_16143" /* 16143 */;
import _mod16146 from "module_16146" /* 16146 */;
import _mod16147 from "module_16147" /* 16147 */;
import prop from "module_16142" /* 16142 */;

let closure_2 = _mod16139("wks");
let _Symbol = _mod16124.Symbol;
if (prop) {
  let withoutSetter = _Symbol.for || _mod16124.Symbol;
  const tmp2 = _Symbol.for || _mod16124.Symbol;
} else {
  withoutSetter = _Symbol;
  if (_Symbol) {
    withoutSetter = _mod16124.Symbol.withoutSetter;
  }
  if (!withoutSetter) {
    withoutSetter = _mod16146;
  }
}

export default (arg0) => {
  let _Symbol = dependencyMap;
  if (_mod16147(closure_2, arg0)) {
    return closure_2[arg0];
  } else {
    if (!_mod16143) {
      let tmp5 = withoutSetter(`Symbol.${arg0}`);
      closure_2[arg0] = tmp5;
    } else {
      _mod16147;
    }
    _Symbol = _mod16124.Symbol;
    tmp5 = _Symbol[arg0];
  }
};