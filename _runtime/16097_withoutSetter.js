// === Module 16097: withoutSetter ===

// Module 16097 (withoutSetter)
import _mod16083 from "module_16083" /* 16083 */;
import _mod16098 from "module_16098" /* 16098 */;
import _mod16102 from "module_16102" /* 16102 */;
import _mod16105 from "module_16105" /* 16105 */;
import _mod16106 from "module_16106" /* 16106 */;
import prop from "module_16101" /* 16101 */;

let closure_2 = _mod16098("wks");
let _Symbol = _mod16083.Symbol;
if (prop) {
  let withoutSetter = _Symbol.for || _mod16083.Symbol;
  const tmp2 = _Symbol.for || _mod16083.Symbol;
} else {
  withoutSetter = _Symbol;
  if (_Symbol) {
    withoutSetter = _mod16083.Symbol.withoutSetter;
  }
  if (!withoutSetter) {
    withoutSetter = _mod16105;
  }
}

export default (arg0) => {
  let _Symbol = dependencyMap;
  if (_mod16106(closure_2, arg0)) {
    return closure_2[arg0];
  } else {
    if (!_mod16102) {
      let tmp5 = withoutSetter(`Symbol.${arg0}`);
      closure_2[arg0] = tmp5;
    } else {
      _mod16106;
    }
    _Symbol = _mod16083.Symbol;
    tmp5 = _Symbol[arg0];
  }
};