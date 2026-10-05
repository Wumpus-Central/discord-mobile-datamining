// === Module 14075: withoutSetter ===

// Module 14075 (withoutSetter)
import _mod14061 from "module_14061" /* 14061 */;
import _mod14076 from "module_14076" /* 14076 */;
import _mod14080 from "module_14080" /* 14080 */;
import _mod14083 from "module_14083" /* 14083 */;
import _mod14084 from "module_14084" /* 14084 */;
import prop from "module_14079" /* 14079 */;

let closure_2 = _mod14076("wks");
let _Symbol = _mod14061.Symbol;
if (prop) {
  let withoutSetter = _Symbol.for || _mod14061.Symbol;
  const tmp2 = _Symbol.for || _mod14061.Symbol;
} else {
  withoutSetter = _Symbol;
  if (_Symbol) {
    withoutSetter = _mod14061.Symbol.withoutSetter;
  }
  if (!withoutSetter) {
    withoutSetter = _mod14083;
  }
}

export default (arg0) => {
  let _Symbol = dependencyMap;
  if (_mod14084(closure_2, arg0)) {
    return closure_2[arg0];
  } else {
    if (!_mod14080) {
      let tmp5 = withoutSetter(`Symbol.${arg0}`);
      closure_2[arg0] = tmp5;
    } else {
      _mod14084;
    }
    _Symbol = _mod14061.Symbol;
    tmp5 = _Symbol[arg0];
  }
};