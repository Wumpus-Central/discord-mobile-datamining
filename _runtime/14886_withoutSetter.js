// === Module 14886: withoutSetter ===

// Module 14886 (withoutSetter)
import _mod14872 from "module_14872" /* 14872 */;
import _mod14887 from "module_14887" /* 14887 */;
import _mod14891 from "module_14891" /* 14891 */;
import _mod14894 from "module_14894" /* 14894 */;
import _mod14895 from "module_14895" /* 14895 */;
import prop from "module_14890" /* 14890 */;

let closure_2 = _mod14887("wks");
let _Symbol = _mod14872.Symbol;
if (prop) {
  let withoutSetter = _Symbol.for || _mod14872.Symbol;
  const tmp2 = _Symbol.for || _mod14872.Symbol;
} else {
  withoutSetter = _Symbol;
  if (_Symbol) {
    withoutSetter = _mod14872.Symbol.withoutSetter;
  }
  if (!withoutSetter) {
    withoutSetter = _mod14894;
  }
}

export default (arg0) => {
  let _Symbol = dependencyMap;
  if (_mod14895(closure_2, arg0)) {
    return closure_2[arg0];
  } else {
    if (!_mod14891) {
      let tmp5 = withoutSetter(`Symbol.${arg0}`);
      closure_2[arg0] = tmp5;
    } else {
      _mod14895;
    }
    _Symbol = _mod14872.Symbol;
    tmp5 = _Symbol[arg0];
  }
};