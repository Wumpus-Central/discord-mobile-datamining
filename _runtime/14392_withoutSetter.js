// === Module 14392: withoutSetter ===

// Module 14392 (withoutSetter)
import _mod14378 from "module_14378" /* 14378 */;
import _mod14393 from "module_14393" /* 14393 */;
import _mod14397 from "module_14397" /* 14397 */;
import _mod14400 from "module_14400" /* 14400 */;
import _mod14401 from "module_14401" /* 14401 */;
import prop from "module_14396" /* 14396 */;

let closure_2 = _mod14393("wks");
let _Symbol = _mod14378.Symbol;
if (prop) {
  let withoutSetter = _Symbol.for || _mod14378.Symbol;
  const tmp2 = _Symbol.for || _mod14378.Symbol;
} else {
  withoutSetter = _Symbol;
  if (_Symbol) {
    withoutSetter = _mod14378.Symbol.withoutSetter;
  }
  if (!withoutSetter) {
    withoutSetter = _mod14400;
  }
}

export default (arg0) => {
  let _Symbol = dependencyMap;
  if (_mod14401(closure_2, arg0)) {
    return closure_2[arg0];
  } else {
    if (!_mod14397) {
      let tmp5 = withoutSetter(`Symbol.${arg0}`);
      closure_2[arg0] = tmp5;
    } else {
      _mod14401;
    }
    _Symbol = _mod14378.Symbol;
    tmp5 = _Symbol[arg0];
  }
};