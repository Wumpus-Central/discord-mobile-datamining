// === Module 14686: withoutSetter ===

// Module 14686 (withoutSetter)
import _mod14672 from "module_14672" /* 14672 */;
import _mod14687 from "module_14687" /* 14687 */;
import _mod14691 from "module_14691" /* 14691 */;
import _mod14694 from "module_14694" /* 14694 */;
import _mod14695 from "module_14695" /* 14695 */;
import prop from "module_14690" /* 14690 */;

let closure_2 = _mod14687("wks");
let _Symbol = _mod14672.Symbol;
if (prop) {
  let withoutSetter = _Symbol.for || _mod14672.Symbol;
  const tmp2 = _Symbol.for || _mod14672.Symbol;
} else {
  withoutSetter = _Symbol;
  if (_Symbol) {
    withoutSetter = _mod14672.Symbol.withoutSetter;
  }
  if (!withoutSetter) {
    withoutSetter = _mod14694;
  }
}

export default (arg0) => {
  let _Symbol = dependencyMap;
  if (_mod14695(closure_2, arg0)) {
    return closure_2[arg0];
  } else {
    if (!_mod14691) {
      let tmp5 = withoutSetter(`Symbol.${arg0}`);
      closure_2[arg0] = tmp5;
    } else {
      _mod14695;
    }
    _Symbol = _mod14672.Symbol;
    tmp5 = _Symbol[arg0];
  }
};