// === Module 16638: withoutSetter ===

// Module 16638 (withoutSetter)
import _mod16624 from "module_16624" /* 16624 */;
import _mod16639 from "module_16639" /* 16639 */;
import _mod16643 from "module_16643" /* 16643 */;
import _mod16646 from "module_16646" /* 16646 */;
import _mod16647 from "module_16647" /* 16647 */;
import prop from "module_16642" /* 16642 */;

let closure_2 = _mod16639("wks");
let _Symbol = _mod16624.Symbol;
if (prop) {
  let withoutSetter = _Symbol.for || _mod16624.Symbol;
  const tmp2 = _Symbol.for || _mod16624.Symbol;
} else {
  withoutSetter = _Symbol;
  if (_Symbol) {
    withoutSetter = _mod16624.Symbol.withoutSetter;
  }
  if (!withoutSetter) {
    withoutSetter = _mod16646;
  }
}

export default (arg0) => {
  let _Symbol = dependencyMap;
  if (_mod16647(closure_2, arg0)) {
    return closure_2[arg0];
  } else {
    if (!_mod16643) {
      let tmp5 = withoutSetter(`Symbol.${arg0}`);
      closure_2[arg0] = tmp5;
    } else {
      _mod16647;
    }
    _Symbol = _mod16624.Symbol;
    tmp5 = _Symbol[arg0];
  }
};