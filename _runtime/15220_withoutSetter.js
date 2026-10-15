// === Module 15220: withoutSetter ===

// Module 15220 (withoutSetter)
import _mod15206 from "module_15206" /* 15206 */;
import _mod15221 from "module_15221" /* 15221 */;
import _mod15225 from "module_15225" /* 15225 */;
import _mod15228 from "module_15228" /* 15228 */;
import _mod15229 from "module_15229" /* 15229 */;
import prop from "module_15224" /* 15224 */;

let closure_2 = _mod15221("wks");
let _Symbol = _mod15206.Symbol;
if (prop) {
  let withoutSetter = _Symbol.for || _mod15206.Symbol;
  const tmp2 = _Symbol.for || _mod15206.Symbol;
} else {
  withoutSetter = _Symbol;
  if (_Symbol) {
    withoutSetter = _mod15206.Symbol.withoutSetter;
  }
  if (!withoutSetter) {
    withoutSetter = _mod15228;
  }
}

export default (arg0) => {
  let _Symbol = dependencyMap;
  if (_mod15229(closure_2, arg0)) {
    return closure_2[arg0];
  } else {
    if (!_mod15225) {
      let tmp5 = withoutSetter(`Symbol.${arg0}`);
      closure_2[arg0] = tmp5;
    } else {
      _mod15229;
    }
    _Symbol = _mod15206.Symbol;
    tmp5 = _Symbol[arg0];
  }
};