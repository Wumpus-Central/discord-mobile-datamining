// === Module 16285: withoutSetter ===

// Module 16285 (withoutSetter)
import _mod16271 from "module_16271" /* 16271 */;
import _mod16286 from "module_16286" /* 16286 */;
import _mod16290 from "module_16290" /* 16290 */;
import _mod16293 from "module_16293" /* 16293 */;
import _mod16294 from "module_16294" /* 16294 */;
import prop from "module_16289" /* 16289 */;

let closure_2 = _mod16286("wks");
let _Symbol = _mod16271.Symbol;
if (prop) {
  let withoutSetter = _Symbol.for || _mod16271.Symbol;
  const tmp2 = _Symbol.for || _mod16271.Symbol;
} else {
  withoutSetter = _Symbol;
  if (_Symbol) {
    withoutSetter = _mod16271.Symbol.withoutSetter;
  }
  if (!withoutSetter) {
    withoutSetter = _mod16293;
  }
}

export default (arg0) => {
  let _Symbol = dependencyMap;
  if (_mod16294(closure_2, arg0)) {
    return closure_2[arg0];
  } else {
    if (!_mod16290) {
      let tmp5 = withoutSetter(`Symbol.${arg0}`);
      closure_2[arg0] = tmp5;
    } else {
      _mod16294;
    }
    _Symbol = _mod16271.Symbol;
    tmp5 = _Symbol[arg0];
  }
};