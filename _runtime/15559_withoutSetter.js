// === Module 15559: withoutSetter ===

// Module 15559 (withoutSetter)
import _mod15545 from "module_15545" /* 15545 */;
import _mod15560 from "module_15560" /* 15560 */;
import _mod15564 from "module_15564" /* 15564 */;
import _mod15567 from "module_15567" /* 15567 */;
import _mod15568 from "module_15568" /* 15568 */;
import prop from "module_15563" /* 15563 */;

let closure_2 = _mod15560("wks");
let _Symbol = _mod15545.Symbol;
if (prop) {
  let withoutSetter = _Symbol.for || _mod15545.Symbol;
  const tmp2 = _Symbol.for || _mod15545.Symbol;
} else {
  withoutSetter = _Symbol;
  if (_Symbol) {
    withoutSetter = _mod15545.Symbol.withoutSetter;
  }
  if (!withoutSetter) {
    withoutSetter = _mod15567;
  }
}

export default (arg0) => {
  let _Symbol = dependencyMap;
  if (_mod15568(closure_2, arg0)) {
    return closure_2[arg0];
  } else {
    if (!_mod15564) {
      let tmp5 = withoutSetter(`Symbol.${arg0}`);
      closure_2[arg0] = tmp5;
    } else {
      _mod15568;
    }
    _Symbol = _mod15545.Symbol;
    tmp5 = _Symbol[arg0];
  }
};