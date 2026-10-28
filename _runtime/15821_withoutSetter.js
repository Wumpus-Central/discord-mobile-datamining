// === Module 15821: withoutSetter ===

// Module 15821 (withoutSetter)
import _mod15807 from "module_15807" /* 15807 */;
import _mod15822 from "module_15822" /* 15822 */;
import _mod15826 from "module_15826" /* 15826 */;
import _mod15829 from "module_15829" /* 15829 */;
import _mod15830 from "module_15830" /* 15830 */;
import prop from "module_15825" /* 15825 */;

let closure_2 = _mod15822("wks");
let _Symbol = _mod15807.Symbol;
if (prop) {
  let withoutSetter = _Symbol.for || _mod15807.Symbol;
  const tmp2 = _Symbol.for || _mod15807.Symbol;
} else {
  withoutSetter = _Symbol;
  if (_Symbol) {
    withoutSetter = _mod15807.Symbol.withoutSetter;
  }
  if (!withoutSetter) {
    withoutSetter = _mod15829;
  }
}

export default (arg0) => {
  let _Symbol = dependencyMap;
  if (_mod15830(closure_2, arg0)) {
    return closure_2[arg0];
  } else {
    if (!_mod15826) {
      let tmp5 = withoutSetter(`Symbol.${arg0}`);
      closure_2[arg0] = tmp5;
    } else {
      _mod15830;
    }
    _Symbol = _mod15807.Symbol;
    tmp5 = _Symbol[arg0];
  }
};