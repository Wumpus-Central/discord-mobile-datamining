// === Module 14565: withoutSetter ===

// Module 14565 (withoutSetter)
import _mod14551 from "module_14551" /* 14551 */;
import _mod14566 from "module_14566" /* 14566 */;
import _mod14570 from "module_14570" /* 14570 */;
import _mod14573 from "module_14573" /* 14573 */;
import _mod14574 from "module_14574" /* 14574 */;
import prop from "module_14569" /* 14569 */;

let closure_2 = _mod14566("wks");
let _Symbol = _mod14551.Symbol;
if (prop) {
  let withoutSetter = _Symbol.for || _mod14551.Symbol;
  const tmp2 = _Symbol.for || _mod14551.Symbol;
} else {
  withoutSetter = _Symbol;
  if (_Symbol) {
    withoutSetter = _mod14551.Symbol.withoutSetter;
  }
  if (!withoutSetter) {
    withoutSetter = _mod14573;
  }
}

export default (arg0) => {
  let _Symbol = dependencyMap;
  if (_mod14574(closure_2, arg0)) {
    return closure_2[arg0];
  } else {
    if (!_mod14570) {
      let tmp5 = withoutSetter(`Symbol.${arg0}`);
      closure_2[arg0] = tmp5;
    } else {
      _mod14574;
    }
    _Symbol = _mod14551.Symbol;
    tmp5 = _Symbol[arg0];
  }
};