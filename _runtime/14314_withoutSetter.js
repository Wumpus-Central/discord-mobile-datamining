// === Module 14314: withoutSetter ===

// Module 14314 (withoutSetter)
import _mod14300 from "module_14300" /* 14300 */;
import _mod14315 from "module_14315" /* 14315 */;
import _mod14319 from "module_14319" /* 14319 */;
import _mod14322 from "module_14322" /* 14322 */;
import _mod14323 from "module_14323" /* 14323 */;
import prop from "module_14318" /* 14318 */;

let closure_2 = _mod14315("wks");
let _Symbol = _mod14300.Symbol;
if (prop) {
  let withoutSetter = _Symbol.for || _mod14300.Symbol;
  const tmp2 = _Symbol.for || _mod14300.Symbol;
} else {
  withoutSetter = _Symbol;
  if (_Symbol) {
    withoutSetter = _mod14300.Symbol.withoutSetter;
  }
  if (!withoutSetter) {
    withoutSetter = _mod14322;
  }
}

export default (arg0) => {
  let _Symbol = dependencyMap;
  if (_mod14323(closure_2, arg0)) {
    return closure_2[arg0];
  } else {
    if (!_mod14319) {
      let tmp5 = withoutSetter(`Symbol.${arg0}`);
      closure_2[arg0] = tmp5;
    } else {
      _mod14323;
    }
    _Symbol = _mod14300.Symbol;
    tmp5 = _Symbol[arg0];
  }
};