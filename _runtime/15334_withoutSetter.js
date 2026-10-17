// === Module 15334: withoutSetter ===

// Module 15334 (withoutSetter)
import _mod15320 from "module_15320" /* 15320 */;
import _mod15335 from "module_15335" /* 15335 */;
import _mod15339 from "module_15339" /* 15339 */;
import _mod15342 from "module_15342" /* 15342 */;
import _mod15343 from "module_15343" /* 15343 */;
import prop from "module_15338" /* 15338 */;

let closure_2 = _mod15335("wks");
let _Symbol = _mod15320.Symbol;
if (prop) {
  let withoutSetter = _Symbol.for || _mod15320.Symbol;
  const tmp2 = _Symbol.for || _mod15320.Symbol;
} else {
  withoutSetter = _Symbol;
  if (_Symbol) {
    withoutSetter = _mod15320.Symbol.withoutSetter;
  }
  if (!withoutSetter) {
    withoutSetter = _mod15342;
  }
}

export default (arg0) => {
  let _Symbol = dependencyMap;
  if (_mod15343(closure_2, arg0)) {
    return closure_2[arg0];
  } else {
    if (!_mod15339) {
      let tmp5 = withoutSetter(`Symbol.${arg0}`);
      closure_2[arg0] = tmp5;
    } else {
      _mod15343;
    }
    _Symbol = _mod15320.Symbol;
    tmp5 = _Symbol[arg0];
  }
};