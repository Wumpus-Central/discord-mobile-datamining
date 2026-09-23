// === Module 14677: withoutSetter ===

// Module 14677 (withoutSetter)
import _mod14663 from "module_14663" /* 14663 */;
import _mod14678 from "module_14678" /* 14678 */;
import _mod14682 from "module_14682" /* 14682 */;
import _mod14685 from "module_14685" /* 14685 */;
import _mod14686 from "module_14686" /* 14686 */;
import prop from "module_14681" /* 14681 */;

let closure_2 = _mod14678("wks");
let _Symbol = _mod14663.Symbol;
if (prop) {
  let withoutSetter = _Symbol.for || _mod14663.Symbol;
  const tmp2 = _Symbol.for || _mod14663.Symbol;
} else {
  withoutSetter = _Symbol;
  if (_Symbol) {
    withoutSetter = _mod14663.Symbol.withoutSetter;
  }
  if (!withoutSetter) {
    withoutSetter = _mod14685;
  }
}

export default (arg0) => {
  let _Symbol = dependencyMap;
  if (_mod14686(closure_2, arg0)) {
    return closure_2[arg0];
  } else {
    if (!_mod14682) {
      let tmp5 = withoutSetter(`Symbol.${arg0}`);
      closure_2[arg0] = tmp5;
    } else {
      _mod14686;
    }
    _Symbol = _mod14663.Symbol;
    tmp5 = _Symbol[arg0];
  }
};