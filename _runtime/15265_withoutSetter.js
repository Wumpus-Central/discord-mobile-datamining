// === Module 15265: withoutSetter ===

// Module 15265 (withoutSetter)
import _mod15251 from "module_15251" /* 15251 */;
import _mod15266 from "module_15266" /* 15266 */;
import _mod15270 from "module_15270" /* 15270 */;
import _mod15273 from "module_15273" /* 15273 */;
import _mod15274 from "module_15274" /* 15274 */;
import prop from "module_15269" /* 15269 */;

let closure_2 = _mod15266("wks");
let _Symbol = _mod15251.Symbol;
if (prop) {
  let withoutSetter = _Symbol.for || _mod15251.Symbol;
  const tmp2 = _Symbol.for || _mod15251.Symbol;
} else {
  withoutSetter = _Symbol;
  if (_Symbol) {
    withoutSetter = _mod15251.Symbol.withoutSetter;
  }
  if (!withoutSetter) {
    withoutSetter = _mod15273;
  }
}

export default (arg0) => {
  let _Symbol = dependencyMap;
  if (_mod15274(closure_2, arg0)) {
    return closure_2[arg0];
  } else {
    if (!_mod15270) {
      let tmp5 = withoutSetter(`Symbol.${arg0}`);
      closure_2[arg0] = tmp5;
    } else {
      _mod15274;
    }
    _Symbol = _mod15251.Symbol;
    tmp5 = _Symbol[arg0];
  }
};