// === Module 15338: withoutSetter ===

// Module 15338 (withoutSetter)
import _mod15324 from "module_15324" /* 15324 */;
import _mod15339 from "module_15339" /* 15339 */;
import _mod15343 from "module_15343" /* 15343 */;
import _mod15346 from "module_15346" /* 15346 */;
import _mod15347 from "module_15347" /* 15347 */;
import prop from "module_15342" /* 15342 */;

let closure_2 = _mod15339("wks");
let _Symbol = _mod15324.Symbol;
if (prop) {
  let withoutSetter = _Symbol.for || _mod15324.Symbol;
  const tmp2 = _Symbol.for || _mod15324.Symbol;
} else {
  withoutSetter = _Symbol;
  if (_Symbol) {
    withoutSetter = _mod15324.Symbol.withoutSetter;
  }
  if (!withoutSetter) {
    withoutSetter = _mod15346;
  }
}

export default (arg0) => {
  let _Symbol = dependencyMap;
  if (_mod15347(closure_2, arg0)) {
    return closure_2[arg0];
  } else {
    if (!_mod15343) {
      let tmp5 = withoutSetter(`Symbol.${arg0}`);
      closure_2[arg0] = tmp5;
    } else {
      _mod15347;
    }
    _Symbol = _mod15324.Symbol;
    tmp5 = _Symbol[arg0];
  }
};