// === Module 16796: withoutSetter ===

// Module 16796 (withoutSetter)
import _mod16782 from "module_16782" /* 16782 */;
import _mod16797 from "module_16797" /* 16797 */;
import _mod16801 from "module_16801" /* 16801 */;
import _mod16804 from "module_16804" /* 16804 */;
import _mod16805 from "module_16805" /* 16805 */;
import prop from "module_16800" /* 16800 */;

let closure_2 = _mod16797("wks");
let _Symbol = _mod16782.Symbol;
if (prop) {
  let withoutSetter = _Symbol.for || _mod16782.Symbol;
  const tmp2 = _Symbol.for || _mod16782.Symbol;
} else {
  withoutSetter = _Symbol;
  if (_Symbol) {
    withoutSetter = _mod16782.Symbol.withoutSetter;
  }
  if (!withoutSetter) {
    withoutSetter = _mod16804;
  }
}

export default (arg0) => {
  let _Symbol = dependencyMap;
  if (_mod16805(closure_2, arg0)) {
    return closure_2[arg0];
  } else {
    if (!_mod16801) {
      let tmp5 = withoutSetter(`Symbol.${arg0}`);
      closure_2[arg0] = tmp5;
    } else {
      _mod16805;
    }
    _Symbol = _mod16782.Symbol;
    tmp5 = _Symbol[arg0];
  }
};