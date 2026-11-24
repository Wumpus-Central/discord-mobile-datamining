// === Module 15573: withoutSetter ===

// Module 15573 (withoutSetter)
import _mod15559 from "module_15559" /* 15559 */;
import _mod15574 from "module_15574" /* 15574 */;
import _mod15578 from "module_15578" /* 15578 */;
import sum from "sum" /* 15581 */;
import _mod15582 from "module_15582" /* 15582 */;
import prop from "module_15577" /* 15577 */;

let closure_2 = _mod15574("wks");
let _Symbol = _mod15559.Symbol;
if (prop) {
  let withoutSetter = _Symbol.for || _mod15559.Symbol;
  const tmp2 = _Symbol.for || _mod15559.Symbol;
} else {
  withoutSetter = _Symbol;
  if (_Symbol) {
    withoutSetter = _mod15559.Symbol.withoutSetter;
  }
  if (!withoutSetter) {
    withoutSetter = sum;
  }
}

export default (arg0) => {
  let _Symbol = dependencyMap;
  if (_mod15582(closure_2, arg0)) {
    return closure_2[arg0];
  } else {
    if (!_mod15578) {
      let tmp5 = withoutSetter(`Symbol.${arg0}`);
      closure_2[arg0] = tmp5;
    } else {
      _mod15582;
    }
    _Symbol = _mod15559.Symbol;
    tmp5 = _Symbol[arg0];
  }
};