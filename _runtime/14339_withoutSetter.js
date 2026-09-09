// === Module 14339: withoutSetter ===

// Module 14339 (withoutSetter)
import _mod14325 from "module_14325" /* 14325 */;
import _mod14340 from "module_14340" /* 14340 */;
import _mod14344 from "module_14344" /* 14344 */;
import _mod14347 from "module_14347" /* 14347 */;
import _mod14348 from "module_14348" /* 14348 */;
import prop from "module_14343" /* 14343 */;

let closure_2 = _mod14340("wks");
let _Symbol = _mod14325.Symbol;
if (prop) {
  let withoutSetter = _Symbol.for || _mod14325.Symbol;
  const tmp2 = _Symbol.for || _mod14325.Symbol;
} else {
  withoutSetter = _Symbol;
  if (_Symbol) {
    withoutSetter = _mod14325.Symbol.withoutSetter;
  }
  if (!withoutSetter) {
    withoutSetter = _mod14347;
  }
}

export default (arg0) => {
  let _Symbol = dependencyMap;
  if (_mod14348(closure_2, arg0)) {
    return closure_2[arg0];
  } else {
    if (!_mod14344) {
      let tmp5 = withoutSetter(`Symbol.${arg0}`);
      closure_2[arg0] = tmp5;
    } else {
      _mod14348;
    }
    _Symbol = _mod14325.Symbol;
    tmp5 = _Symbol[arg0];
  }
};