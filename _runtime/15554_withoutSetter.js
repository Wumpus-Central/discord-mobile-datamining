// === Module 15554: withoutSetter ===

// Module 15554 (withoutSetter)
import _mod15540 from "module_15540" /* 15540 */;
import _mod15555 from "module_15555" /* 15555 */;
import _mod15559 from "module_15559" /* 15559 */;
import _mod15562 from "module_15562" /* 15562 */;
import _mod15563 from "module_15563" /* 15563 */;
import prop from "module_15558" /* 15558 */;

let closure_2 = _mod15555("wks");
let _Symbol = _mod15540.Symbol;
if (prop) {
  let withoutSetter = _Symbol.for || _mod15540.Symbol;
  const tmp2 = _Symbol.for || _mod15540.Symbol;
} else {
  withoutSetter = _Symbol;
  if (_Symbol) {
    withoutSetter = _mod15540.Symbol.withoutSetter;
  }
  if (!withoutSetter) {
    withoutSetter = _mod15562;
  }
}

export default (arg0) => {
  let _Symbol = dependencyMap;
  if (_mod15563(closure_2, arg0)) {
    return closure_2[arg0];
  } else {
    if (!_mod15559) {
      let tmp5 = withoutSetter(`Symbol.${arg0}`);
      closure_2[arg0] = tmp5;
    } else {
      _mod15563;
    }
    _Symbol = _mod15540.Symbol;
    tmp5 = _Symbol[arg0];
  }
};