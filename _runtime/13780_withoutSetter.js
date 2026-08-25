// === Module 13780: withoutSetter ===

// Module 13780 (withoutSetter)
import _mod13766 from "module_13766" /* 13766 */;
import __core_js_shared__ from "__core-js_shared__" /* 13781 */;
import sum from "sum" /* 13788 */;
import call from "call" /* 13789 */;
import prop from "prop" /* 13784 */;

let closure_2 = __core_js_shared__("wks");
let _Symbol = _mod13766.Symbol;
if (prop) {
  let withoutSetter = _Symbol.for || _mod13766.Symbol;
  const tmp2 = _Symbol.for || _mod13766.Symbol;
} else {
  withoutSetter = _Symbol;
  if (_Symbol) {
    withoutSetter = _mod13766.Symbol.withoutSetter;
  }
  if (!withoutSetter) {
    withoutSetter = sum;
  }
}

export default (arg0) => {
  let _Symbol = dependencyMap;
  if (call(closure_2, arg0)) {
    return tmp2[arg0];
  } else {
    if (!tmp(13785)) {
      let tmp5 = withoutSetter(`Symbol.${arg0}`);
      tmp2[arg0] = tmp5;
    } else {
      const tmpResult = tmp(13789);
    }
    _Symbol = tmp(13766).Symbol;
    tmp5 = _Symbol[arg0];
  }
};