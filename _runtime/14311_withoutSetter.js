// === Module 14311: withoutSetter ===

// Module 14311 (withoutSetter)
import _mod14297 from "module_14297" /* 14297 */;
import _mod14312 from "module_14312" /* 14312 */;
import _mod14319 from "module_14319" /* 14319 */;
import _mod14320 from "module_14320" /* 14320 */;
import prop from "module_14315" /* 14315 */;

let closure_2 = _mod14312("wks");
let _Symbol = _mod14297.Symbol;
if (prop) {
  let withoutSetter = _Symbol.for || _mod14297.Symbol;
  const tmp2 = _Symbol.for || _mod14297.Symbol;
} else {
  withoutSetter = _Symbol;
  if (_Symbol) {
    withoutSetter = _mod14297.Symbol.withoutSetter;
  }
  if (!withoutSetter) {
    withoutSetter = _mod14319;
  }
}

export default (arg0) => {
  let _Symbol = dependencyMap;
  if (_mod14320(closure_2, arg0)) {
    return tmp2[arg0];
  } else {
    if (!tmp(14316)) {
      let tmp5 = withoutSetter(`Symbol.${arg0}`);
      tmp2[arg0] = tmp5;
    } else {
      const tmpResult = tmp(14320);
    }
    _Symbol = tmp(14297).Symbol;
    tmp5 = _Symbol[arg0];
  }
};