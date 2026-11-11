// === Module 16643: withoutSetter ===

// Module 16643 (withoutSetter)
import _mod16629 from "module_16629" /* 16629 */;
import _mod16644 from "module_16644" /* 16644 */;
import _mod16648 from "module_16648" /* 16648 */;
import _mod16651 from "module_16651" /* 16651 */;
import _mod16652 from "module_16652" /* 16652 */;
import prop from "module_16647" /* 16647 */;

let closure_2 = _mod16644("wks");
let _Symbol = _mod16629.Symbol;
if (prop) {
  let withoutSetter = _Symbol.for || _mod16629.Symbol;
  const tmp2 = _Symbol.for || _mod16629.Symbol;
} else {
  withoutSetter = _Symbol;
  if (_Symbol) {
    withoutSetter = _mod16629.Symbol.withoutSetter;
  }
  if (!withoutSetter) {
    withoutSetter = _mod16651;
  }
}

export default (arg0) => {
  let _Symbol = dependencyMap;
  if (_mod16652(closure_2, arg0)) {
    return closure_2[arg0];
  } else {
    if (!_mod16648) {
      let tmp5 = withoutSetter(`Symbol.${arg0}`);
      closure_2[arg0] = tmp5;
    } else {
      _mod16652;
    }
    _Symbol = _mod16629.Symbol;
    tmp5 = _Symbol[arg0];
  }
};