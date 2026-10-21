// === Module 15456: withoutSetter ===

// Module 15456 (withoutSetter)
import _mod15442 from "module_15442" /* 15442 */;
import _mod15457 from "module_15457" /* 15457 */;
import _mod15461 from "module_15461" /* 15461 */;
import _mod15464 from "module_15464" /* 15464 */;
import _mod15465 from "module_15465" /* 15465 */;
import prop from "module_15460" /* 15460 */;

let closure_2 = _mod15457("wks");
let _Symbol = _mod15442.Symbol;
if (prop) {
  let withoutSetter = _Symbol.for || _mod15442.Symbol;
  const tmp2 = _Symbol.for || _mod15442.Symbol;
} else {
  withoutSetter = _Symbol;
  if (_Symbol) {
    withoutSetter = _mod15442.Symbol.withoutSetter;
  }
  if (!withoutSetter) {
    withoutSetter = _mod15464;
  }
}

export default (arg0) => {
  let _Symbol = dependencyMap;
  if (_mod15465(closure_2, arg0)) {
    return closure_2[arg0];
  } else {
    if (!_mod15461) {
      let tmp5 = withoutSetter(`Symbol.${arg0}`);
      closure_2[arg0] = tmp5;
    } else {
      _mod15465;
    }
    _Symbol = _mod15442.Symbol;
    tmp5 = _Symbol[arg0];
  }
};