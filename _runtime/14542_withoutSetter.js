// === Module 14542: withoutSetter ===

// Module 14542 (withoutSetter)
import _mod14528 from "module_14528" /* 14528 */;
import _mod14543 from "module_14543" /* 14543 */;
import _mod14547 from "module_14547" /* 14547 */;
import _mod14550 from "module_14550" /* 14550 */;
import _mod14551 from "module_14551" /* 14551 */;
import prop from "module_14546" /* 14546 */;

let closure_2 = _mod14543("wks");
let _Symbol = _mod14528.Symbol;
if (prop) {
  let withoutSetter = _Symbol.for || _mod14528.Symbol;
  const tmp2 = _Symbol.for || _mod14528.Symbol;
} else {
  withoutSetter = _Symbol;
  if (_Symbol) {
    withoutSetter = _mod14528.Symbol.withoutSetter;
  }
  if (!withoutSetter) {
    withoutSetter = _mod14550;
  }
}

export default (arg0) => {
  let _Symbol = dependencyMap;
  if (_mod14551(closure_2, arg0)) {
    return closure_2[arg0];
  } else {
    if (!_mod14547) {
      let tmp5 = withoutSetter(`Symbol.${arg0}`);
      closure_2[arg0] = tmp5;
    } else {
      _mod14551;
    }
    _Symbol = _mod14528.Symbol;
    tmp5 = _Symbol[arg0];
  }
};