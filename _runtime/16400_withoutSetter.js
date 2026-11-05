// === Module 16400: withoutSetter ===

// Module 16400 (withoutSetter)
import _mod16386 from "module_16386" /* 16386 */;
import _mod16401 from "module_16401" /* 16401 */;
import _mod16405 from "module_16405" /* 16405 */;
import _mod16408 from "module_16408" /* 16408 */;
import _mod16409 from "module_16409" /* 16409 */;
import prop from "module_16404" /* 16404 */;

let closure_2 = _mod16401("wks");
let _Symbol = _mod16386.Symbol;
if (prop) {
  let withoutSetter = _Symbol.for || _mod16386.Symbol;
  const tmp2 = _Symbol.for || _mod16386.Symbol;
} else {
  withoutSetter = _Symbol;
  if (_Symbol) {
    withoutSetter = _mod16386.Symbol.withoutSetter;
  }
  if (!withoutSetter) {
    withoutSetter = _mod16408;
  }
}

export default (arg0) => {
  let _Symbol = dependencyMap;
  if (_mod16409(closure_2, arg0)) {
    return closure_2[arg0];
  } else {
    if (!_mod16405) {
      let tmp5 = withoutSetter(`Symbol.${arg0}`);
      closure_2[arg0] = tmp5;
    } else {
      _mod16409;
    }
    _Symbol = _mod16386.Symbol;
    tmp5 = _Symbol[arg0];
  }
};