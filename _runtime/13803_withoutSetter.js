// === Module 13803: withoutSetter ===

// Module 13803 (withoutSetter)
import _mod13789 from "module_13789" /* 13789 */;
import _mod13804 from "module_13804" /* 13804 */;
import _mod13808 from "module_13808" /* 13808 */;
import _mod13811 from "module_13811" /* 13811 */;
import _mod13812 from "module_13812" /* 13812 */;
import prop from "module_13807" /* 13807 */;

let closure_2 = _mod13804("wks");
let _Symbol = _mod13789.Symbol;
if (prop) {
  let withoutSetter = _Symbol.for || _mod13789.Symbol;
  const tmp2 = _Symbol.for || _mod13789.Symbol;
} else {
  withoutSetter = _Symbol;
  if (_Symbol) {
    withoutSetter = _mod13789.Symbol.withoutSetter;
  }
  if (!withoutSetter) {
    withoutSetter = _mod13811;
  }
}

export default (arg0) => {
  let _Symbol = dependencyMap;
  if (_mod13812(closure_2, arg0)) {
    return closure_2[arg0];
  } else {
    if (!_mod13808) {
      let tmp5 = withoutSetter(`Symbol.${arg0}`);
      closure_2[arg0] = tmp5;
    } else {
      _mod13812;
    }
    _Symbol = _mod13789.Symbol;
    tmp5 = _Symbol[arg0];
  }
};