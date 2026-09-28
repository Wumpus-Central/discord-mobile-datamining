// === Module 13802: withoutSetter ===

// Module 13802 (withoutSetter)
import _mod13788 from "module_13788" /* 13788 */;
import _mod13803 from "module_13803" /* 13803 */;
import _mod13807 from "module_13807" /* 13807 */;
import _mod13810 from "module_13810" /* 13810 */;
import _mod13811 from "module_13811" /* 13811 */;
import prop from "module_13806" /* 13806 */;

let closure_2 = _mod13803("wks");
let _Symbol = _mod13788.Symbol;
if (prop) {
  let withoutSetter = _Symbol.for || _mod13788.Symbol;
  const tmp2 = _Symbol.for || _mod13788.Symbol;
} else {
  withoutSetter = _Symbol;
  if (_Symbol) {
    withoutSetter = _mod13788.Symbol.withoutSetter;
  }
  if (!withoutSetter) {
    withoutSetter = _mod13810;
  }
}

export default (arg0) => {
  let _Symbol = dependencyMap;
  if (_mod13811(closure_2, arg0)) {
    return closure_2[arg0];
  } else {
    if (!_mod13807) {
      let tmp5 = withoutSetter(`Symbol.${arg0}`);
      closure_2[arg0] = tmp5;
    } else {
      _mod13811;
    }
    _Symbol = _mod13788.Symbol;
    tmp5 = _Symbol[arg0];
  }
};