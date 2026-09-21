// === Module 14591: withoutSetter ===

// Module 14591 (withoutSetter)
import _mod14577 from "module_14577" /* 14577 */;
import _mod14592 from "module_14592" /* 14592 */;
import _mod14596 from "module_14596" /* 14596 */;
import _mod14599 from "module_14599" /* 14599 */;
import _mod14600 from "module_14600" /* 14600 */;
import prop from "module_14595" /* 14595 */;

let closure_2 = _mod14592("wks");
let _Symbol = _mod14577.Symbol;
if (prop) {
  let withoutSetter = _Symbol.for || _mod14577.Symbol;
  const tmp2 = _Symbol.for || _mod14577.Symbol;
} else {
  withoutSetter = _Symbol;
  if (_Symbol) {
    withoutSetter = _mod14577.Symbol.withoutSetter;
  }
  if (!withoutSetter) {
    withoutSetter = _mod14599;
  }
}

export default (arg0) => {
  let _Symbol = dependencyMap;
  if (_mod14600(closure_2, arg0)) {
    return closure_2[arg0];
  } else {
    if (!_mod14596) {
      let tmp5 = withoutSetter(`Symbol.${arg0}`);
      closure_2[arg0] = tmp5;
    } else {
      _mod14600;
    }
    _Symbol = _mod14577.Symbol;
    tmp5 = _Symbol[arg0];
  }
};