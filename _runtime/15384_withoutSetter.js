// === Module 15384: withoutSetter ===

// Module 15384 (withoutSetter)
import _mod15370 from "module_15370" /* 15370 */;
import _mod15385 from "module_15385" /* 15385 */;
import _mod15389 from "module_15389" /* 15389 */;
import _mod15392 from "module_15392" /* 15392 */;
import _mod15393 from "module_15393" /* 15393 */;
import prop from "module_15388" /* 15388 */;

let closure_2 = _mod15385("wks");
let _Symbol = _mod15370.Symbol;
if (prop) {
  let withoutSetter = _Symbol.for || _mod15370.Symbol;
  const tmp2 = _Symbol.for || _mod15370.Symbol;
} else {
  withoutSetter = _Symbol;
  if (_Symbol) {
    withoutSetter = _mod15370.Symbol.withoutSetter;
  }
  if (!withoutSetter) {
    withoutSetter = _mod15392;
  }
}

export default (arg0) => {
  let _Symbol = dependencyMap;
  if (_mod15393(closure_2, arg0)) {
    return closure_2[arg0];
  } else {
    if (!_mod15389) {
      let tmp5 = withoutSetter(`Symbol.${arg0}`);
      closure_2[arg0] = tmp5;
    } else {
      _mod15393;
    }
    _Symbol = _mod15370.Symbol;
    tmp5 = _Symbol[arg0];
  }
};