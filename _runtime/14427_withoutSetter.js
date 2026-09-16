// === Module 14427: withoutSetter ===

// Module 14427 (withoutSetter)
import _mod14413 from "module_14413" /* 14413 */;
import _mod14428 from "module_14428" /* 14428 */;
import _mod14432 from "module_14432" /* 14432 */;
import _mod14435 from "module_14435" /* 14435 */;
import _mod14436 from "module_14436" /* 14436 */;
import prop from "module_14431" /* 14431 */;

let closure_2 = _mod14428("wks");
let _Symbol = _mod14413.Symbol;
if (prop) {
  let withoutSetter = _Symbol.for || _mod14413.Symbol;
  const tmp2 = _Symbol.for || _mod14413.Symbol;
} else {
  withoutSetter = _Symbol;
  if (_Symbol) {
    withoutSetter = _mod14413.Symbol.withoutSetter;
  }
  if (!withoutSetter) {
    withoutSetter = _mod14435;
  }
}

export default (arg0) => {
  let _Symbol = dependencyMap;
  if (_mod14436(closure_2, arg0)) {
    return closure_2[arg0];
  } else {
    if (!_mod14432) {
      let tmp5 = withoutSetter(`Symbol.${arg0}`);
      closure_2[arg0] = tmp5;
    } else {
      _mod14436;
    }
    _Symbol = _mod14413.Symbol;
    tmp5 = _Symbol[arg0];
  }
};